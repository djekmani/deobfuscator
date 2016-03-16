angular.module('starter.controllers', [])


.controller('DashCtrl', function($scope, $http) {
  this.token = null;
  this.showMe = false;
  this.bntMsg = "Extract";
  this.ports = ["" , "" , ""];

  this.extractToken = function()
  {
    var i = 0
    var clear = atob(this.token)
    var seqs = clear.split(" ")
    for(i = 0; i < seqs.length -1 ; i++)
    {
      this.ports[i] = seqs[i].split(":")
    
    }

  }
  this.showSequence = function()
  {
    if(this.token != null)
    {
      this.bntMsg = "Clear"
      this.showMe = true
      this.extractToken()
      this.token = null

    }
    else
    {
        this.bntMsg = "Extract"
        this.showMe = false
    }
  }


})


.controller('AccountCtrl', function($scope, auth, store, $state) {
  $scope.logout = function() {
    auth.signout();
    store.remove('token');
    store.remove('profile');
    store.remove('refreshToken');
    $state.go('login', {}, {reload: true});
  };
});
