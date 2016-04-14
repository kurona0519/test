$(function(){
	//最初にテキスト範囲に追加
	$("div.text:first").addClass("tgt");

	 // ここで文字を<span></span>で囲む
	$('.tgt').children().andSelf().contents().each(function() {
		if (this.nodeType == 3) {
			$(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
		}
	});

	// 一文字ずつフェードインさせる
	$('.tgt:first').css({'opacity':1});
	for (var i = 0; i <= $('.tgt:first').children().size(); i++) {
		$('.tgt').children('span:eq('+i+')').delay(50*i).animate({'opacity':1},50);
		console.log('firstText:'+i);
	};
	
	//テキスト範囲をクリック 一回目以降、テキスト
	$(".text_area").on("click",function () {

    	secondName = $("div.chara_name:first").html();
    	secondText = $("div.text:first").html();
    	nextText = $('.tgt:first').children();
    	console.log('nextText:'+i);

        //バックログ移動 chara_name
        $("div.text_area_after").append(secondName);
        $("div.chara_name:first").remove();

    	//バックログ移動 text
    	$("div.text_area_after").append(secondText);
        $("div.text:first").remove();

        //次のテキスト準備
        $("div.text_hidden:first").removeClass("text_hidden");
        $("div.chara_name:first").addClass("dis_on");
        $("div.text:first").addClass("tgt");

        // ここで文字を<span></span>で囲む
		$('.tgt').children().andSelf().contents().each(function() {
			if (this.nodeType == 3) {
				$(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
			}
		});

		// 一文字ずつフェードインさせる
		$('.tgt:first').css({'opacity':1});
		for (var i = 0; i <= $(nextText).size(); i++) {
			$('.tgt:first').children('span:eq('+i+')').delay(50*i).animate({'opacity':1},50);
		};
    });

	//テキスト内確認
    $(".text").each(function(i, elem) {
        console.log(i + ': ' + $(elem).text());
    });

    //バックログ
    $('.content_after_btn').on("click",function(){
    	$(".content_after").toggle("dis_on");
    	
    });

});


