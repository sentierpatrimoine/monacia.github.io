angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.accueil', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/accueil.html',
        controller: 'accueilCtrl'
      }
    }
  })

  .state('menu.leSentierDuPatrimoine', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/leSentierDuPatrimoine.html',
        controller: 'leSentierDuPatrimoineCtrl'
      }
    }
  })

  .state('menu.contact', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contact.html',
        controller: 'contactCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.carteDuSentierDuPatrimoine', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/carteDuSentierDuPatrimoine.html',
        controller: 'carteDuSentierDuPatrimoineCtrl'
      }
    }
  })

  .state('menu.leFour', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/leFour.html',
        controller: 'leFourCtrl'
      }
    }
  })

  .state('menu.oriuDIddastricciola', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/oriuDIddastricciola.html',
        controller: 'oriuDIddastricciolaCtrl'
      }
    }
  })

  .state('menu.oriuDeCubia', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/oriuDeCubia.html',
        controller: 'oriuDeCubiaCtrl'
      }
    }
  })

  .state('menu.leMoulinDeTiadru', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/leMoulinDeTiadru.html',
        controller: 'leMoulinDeTiadruCtrl'
      }
    }
  })

  .state('page', {
    url: '/page9',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('menu.maisonDu18Eme', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/maisonDu18Eme.html',
        controller: 'maisonDu18EmeCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});