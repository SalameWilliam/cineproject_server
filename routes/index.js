var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

var smtpTransport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "cineproject.serveur@gmail.com",
    pass: "stimoroltropicanalespicklescestdesananas"
  }});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Accueil' });
});

router.get('/about_us', function(req, res, next) {
  res.render('about_us', { title: 'Qui sommes nous ?' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/newsletter', function (req, res) {

    let body = req.body;

    smtpTransport.sendMail({  //email options
      from: "cineproject.serveur@gmail.com",
      to: "willsalame@gmail.com", // receiver
      subject: "Nouvel abonnement à la newsletter", // subject
      text: "Email : " + body.email
    }, function(error, response){  //callback
      if(error){
        console.log(error);
      }else{
        console.log(body.email + " vient de s'incrire à la newsletter");
      }

      smtpTransport.close();
    });

    res.end('{"success" : "Updated Successfully", "status" : 200}');
});

router.post('/message', function (req, res) {
    console.log(req.body);

    let body = req.body;

    smtpTransport.sendMail({  //email options
        from: "cineproject.serveur@gmail.com",
        to: "willsalame@gmail.com", // receiver
        subject: "Message utilisateur cinéproject.be", // subject
        text: "Nom : " + body.name + "\nEmail : " + body.email + "\nMessage : " + body.message // body (var data which we've declared)
    }, function(error, response){  //callback
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + body.email);
        }

        smtpTransport.close();
    });

    res.end('{"success" : "Updated Successfully", "status" : 200}');
});

module.exports = router;
