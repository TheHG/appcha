Template.dashboard_subnav.onRendered(function(){
  this.$('ul.tabs').tabs();
})


Template.dashboard_subnav.events({
  "click .tab a": (e, t) => {
    DahboardVariables.set('project_filter', $(e.target).data().param);
  }
})