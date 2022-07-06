function a() {
  var a = document.getElementById('site_commentsContainer');
  bodymovin.loadAnimation({
    wrapper: a,
    rendererSettings: {
      filterSize: {
        width: '600%',
        height: '600%',
        x: '-200%',
        y: '-200%',
      },
    },
    animType: 'svg',
    loop: !0,
    path: 'https://du-cdn.multiscreensite.com/duda_website/images/home/site_comments.json?v=<?=$imgsV?>',
  });
}

function b() {
  var a = document.getElementById('workflowContainer');
  bodymovin.loadAnimation({
    wrapper: a,
    rendererSettings: {
      filterSize: {
        width: '600%',
        height: '600%',
        x: '-200%',
        y: '-200%',
      },
    },
    animType: 'svg',
    loop: !0,
    path: 'https://du-cdn.multiscreensite.com/duda_website/images/home/streamlined_workflow_smaller_lighter.json?v=<?=$imgsV?>',
  });
}

function c() {
  var a = document.getElementById('growthContainer');
  bodymovin
    .loadAnimation({
      wrapper: a,
      rendererSettings: {
        filterSize: {
          width: '600%',
          height: '600%',
          x: '-200%',
          y: '-200%',
        },
      },
      animType: 'svg',
      loop: !0,
      path: 'https://du-cdn.multiscreensite.com/duda_website/images/home/Path_to_Growth_graph.json?v=<?=$imgsV?>',
    })
    .setSpeed(0.2);
}
