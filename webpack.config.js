
var config = process.env.NODE_ENV === "production" ? require('./config/webpack.prod.js') :  require('./config/webpack.dev.js');
module.exports = config;

// module.exports = () => {
//     // const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
//     const mode = process.env.NODE_ENV;
//     if(mode === 'production'){
//         console.log('selec prod')
//         require('./config/webpack.prod.js')
//     }
//     else{
//         console.log('selec dev')
//         require('./config/webpack.dev.js');
//     }
// }
