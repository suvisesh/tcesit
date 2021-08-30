
  !function(){
    "use strict";
      
  
    angular.module('myProjects', [])
    .controller('ListController', ListController)
    .controller('ShowController', ShowController)
    .service('ListService', ListService);
    
    ListController.$inject = ['ListService'];
    
    function ListController(ListService) {
      var itemAdder = this;
    
      itemAdder.itemName = "";
    
      itemAdder.addItem = function () {
        ListService.addItem(itemAdder.itemName);
      }
    }
    
    ShowController.$inject = ['ListService'];
    function ShowController(ListService) {
      var showList = this;
    
      showList.details = ListService.getItems();
    
      
    }
    
    function ListService() {
      var service = this;
      var details= [{name:'First project',description:'developed first',status:'completed',link:'#'},
      {name:'Second project',description:'developed second',status:'completed',link:'#'},
      {name:'Third project',description:'developed third',status:'initiated',link:'#'},
      {name:'Fourth project',description:'developed fourth',status:'in progress',link:'#'},
      {name:'Fifth project',description:'developed fifth',status:'in progress',link:'#'},
      {name:'Sixth project',description:'developed sixth',status:'in review',link:'#'},
      ];
       
      service.getItems = function () {
        return details;
      };
    }
}();