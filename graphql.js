import gqlwx from './wxgraphql';
var GraphQL = gqlwx.GraphQL;

const Token = 'yourToken';
const BaseUrl = 'http://yourUrl';

function toast(err) {
  wx.showToast({
    title: err,
    icon: 'none',
    duration: 2000,
  });
}

const gql = GraphQL(
  {
    //设置全局url
    url: BaseUrl + '/graphql', // url必填

    //设置全居动态header
    header: function () {
      return {
        // something....
        Authorization: Token,
      };
    },
    //设置全居错误拦截
    errorHandler: function (res) {
      //do something
      try {
        const errors = res.errors[0];
        let err = errors.message;
        toast(err);
      } catch (error) {
        let err = error.message || '未知错误';
        toast(err);
        throw error;
      }
    },
  },
  true
);

export default gql;
