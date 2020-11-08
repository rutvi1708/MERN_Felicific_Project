//const jwt = require('jsonwebtoken');
//const config = require('../../../config/default');
//const configration = require('../../../config/default')
// module.exports = async function (req, res, next) {
//   const token = req.header('x-auth-token');

//  / if (!token) {
//     return res.status(401).json({ msg: 'No token,authorization denied' });
//   }

//   try {
//     console.log('beforeverify');
//     //console.log(jwtSecret);
//     console.log('token');
//     const decoded = await jwt.verify(token.split(" ")[1].toString(),configration.jwtSecret );
//     console.log('afterverify');

//     req.user = decoded.user;
//     next();
//   } catch (err) {
//     console.log(err);
//     res.status(401).json({ msg: 'Token is not valid' });
//   }
// };
const jwt = require('jsonwebtoken')
const config = require('config')
const  { jwtSecret } = require('../../../config/default')

module.exports = function (req, res, next) {
    const token=req.header('x-auth-token')

    if(!token){
        return res.status(401).json({msg:'No token,authorization denied'})

    }
    //try{
    const decoded =jwt.verify(token, jwtSecret);
    req.user=decoded.user ;
    //console.log(req.user);
    // console.log(decoded.user);
    next();
    //}catch(err){
      //  res.status(401).json({msg:'Token is not valid'} );
    //}

}