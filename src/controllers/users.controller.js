import User from "../models/User";
import jwt from 'jsonwebtoken'


export async function signup(req, res) {
  try {
    const { email, password } = req.body;
    const newUser = new User({email, password});
    
    await newUser.save();
    const token = await jwt.sign({_id: newUser._id}, 'secretkey');
    res.status(200).json({token});
  } catch (error) {
    res.status(500).json({ok: false, error});
  }
    
}

export async function signin(req, res) {

  try {
    const { email, password } = req.body;

    const user = await User.findOne({email});
    if (!user) return res.status(401).send('The email doen\' exists');
    if (user.password !== password) return res.status(401).send('Wrong Password');

    const token = jwt.sign({_id: user._id}, 'secretkey');

  return res.status(200).json({token});
  } catch (error) {
    res.status(500).json({ok: false, error});
  }
}


async function verifyToken(req, res, next) {
	try {
		if (!req.headers.authorization) {
			return res.status(401).send('Unauhtorized Request');
		}
		let token = req.headers.authorization.split(' ')[1];
		if (token === 'null') {
			return res.status(401).send('Unauhtorized Request');
		}

		const payload = await jwt.verify(token, 'secretkey');
		if (!payload) {
			return res.status(401).send('Unauhtorized Request');
		}
		req.userId = payload._id;
		next();
	} catch(e) {
		//console.log(e)
		return res.status(401).send('Unauhtorized Request');
	}
}
