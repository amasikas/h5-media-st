$(function(){
  const optionsList = [{
    id:'v1',
    url:'http://openclass-cdn.vipkid.com.cn/gateway/beta/video/vdo6f9f6f482ea4b1aa87cb769258b8aabd.mp4'
  },{
    id: 'v2',
    url: 'http://openclass-cdn.vipkid.com.cn/gateway/beta/video/vdo7f6a59d01358f6b85b4f18cfcb00fe8d.mp4',
  },{
    id: 'v3',
    url:'http://openclass-cdn.vipkid.com.cn/gateway/beta/video/vdo269c81ef07fe351a7db743c7f8d99364.mp4'
  }];
  function createVideoTag(obj){
    let $video = $('<video>');
    $video.attr('id', obj.id);
    $video.css('width', '100%');
    $video.css('z-index', '0');
    $video.attr('playsinline', 'true');
    $video[0].src=obj.url;
    // let $wrap = $('<div>');
    // $wrap.append($video);
    $('#cache').append($video);
  }

  function setVideoStatus($target, status){
    $target[0].pause();
    if(status === 'hide'){
      //$target.css('display', 'none');
      $('video').css('z-index', '0');
    }else{
      $target.css('z-index', '100');
    }
  }

  optionsList.map(item=>{
    createVideoTag(item);
  });

  $(document).on('click', '#b1', function(){
    setVideoStatus($('#vv'), 'hide');
    setVideoStatus($('#v1'), 'show');
    $('#v1')[0].play();
  });
  $(document).on('click', '#b2', function(){
    setVideoStatus($('#vv'), 'hide');
    setVideoStatus($('#v2'), 'show');
    $('#v2')[0].play();
  });
  $(document).on('click', '#b3', function(){
    setVideoStatus($('#vv'), 'hide');
    setVideoStatus($('#v3'), 'show');
    $('#v3')[0].play();
  });
  $('showPanel');
});
