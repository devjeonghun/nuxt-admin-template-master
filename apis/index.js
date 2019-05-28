import express from 'express';
import firebase from 'firebase';

// Create express router
const router = express.Router();
const app = express();

const firebaseConfig = {
    apiKey: "AIzaSyAhY5PPbMjKK_pHSWPh_H9m7tXEkEM-7DU",
    authDomain: "hellchosun.firebaseapp.com",
    databaseURL: "https://hellchosun.firebaseio.com",
    projectId: "hellchosun",
    storageBucket: "hellchosun.appspot.com",
    messagingSenderId: "485302009068",
    appId: "1:485302009068:web:fd54deda26bec700"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const dbSetting = {
    timestampsInSnapshots: true
}
db.settings(dbSetting);

router.use((req, res, next) => {
    Object.setPrototypeOf(req, app.request);
    Object.setPrototypeOf(res, app.response);
    req.res = res;
    res.req = req;
    next();
});

/*firebase.auth().signInWithEmailAndPassword(req.body.id, req.body.pw)
.then(function (firebaseUser) {

    req.session.authUser = req.body.id
    return res.json({id: 'admin'});
})
.catch(function (err) {
    console.log(err);
    return res.json({id: ''});
})*/

router.post('/login', (req, res) => {
    let user={PW:null,NICKNAME:null};
    db.collection('user').where('ID', '==', req.body.id).get().then((query) => {
        if(query.docs.length > 0){
            user = query.docs[0].data();
        }else{
            return;
        }
    }).finally(()=>{
        if (user.PW === req.body.pw) {
            return res.json({id: user.NICKNAME});
        }else{
            return res.json({id: ''});
        }
    });
});

router.post('/logout', (req, res) => {
    delete req.session.authUser;
    res.json({ok: true});
});

router.post('/status',(req,res)=>{
    res.json({result:req.session.authUser != null?true:false});
});

// Export the server middleware
export default {
    path: '/apis',
    handler: router
};
