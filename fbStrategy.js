passport.use(new FacebookStrategy({
    clientID: 407748563171043,
    clientSecret: , //something goes here
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'email', 'friends']
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));



//// MIDDLEWARE


app.get('/auth/facebook',
  passport.authenticate('facebook', { scope: 'user_friends' }));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


  // Get friends

  FB.api(
    '/{user-id}/friends',
    'GET',
    {},
    function(response) {
        // Insert your code here
    }
  );