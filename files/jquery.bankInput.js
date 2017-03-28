/** 
�� JQUERY ģ���Ա��ؼ������ʺ����� 
* @Author 312854458@qq.com ������ 
**/
(function($){ 
    // ������ʽ�� 
    $.fn.bankInput = function(options){ 
        var defaults = { 
            min : 0, // ������������ 
            max : 22, // ����������� 
            deimiter : ' ', // �˺ŷָ��� 
            onlyNumber : true, // ֻ���������� 
            copy : true // ������  
        }; 
        var opts = $.extend({}, defaults, options); 
        var obj = $(this); 
        obj.css({imeMode:'Disabled',borderWidth:'0px',color:'#000',fontFamly:'Times New Roman'}).attr('maxlength', opts.max); 
        if(obj.val() != '') obj.val( obj.val().replace(/\s/g,'').replace(/(\d{4})(?=\d)/g,"$1"+opts.deimiter) ); 
        obj.bind('keyup',function(event){ 
             if(opts.onlyNumber){ //kjzc
                  if(!(event.keyCode>=48 && event.keyCode<=57)){ 
					this.value=this.value.replace(/[^\dkjzc]/g,''); 
                  }      
             }
			 var s=this.value;
			s= s.replace(/\s/g,'');
			s= s.substr(0,18) ;
             this.value = s.replace(/\s/g,'').replace(/(\d{4})(?=\d)/g,"$1"+opts.deimiter);    
// alert(1);			 
        }).bind('dragenter',function(){ 
            return false; 
        }).bind('onpaste',function(){ 
            return !clipboardData.getData('text').match(/\D/); 
        }).bind('blur',function(){
			var s=this.value;
			s= s.replace(/\s/g,'');
			s= s.substr(0,18) ;
            this.value = s.replace(/\s/g,'').replace(/(\d{4})(?=\d)/g,"$1"+opts.deimiter);  
			// alert(2);
            if(this.value.length < opts.min){ 
                alertMsg.warn('��������'+opts.min+'λ�˺���Ϣ��'); 
                obj.focus(); 
            } 
        }) 
    } 
      
    // �б���ʾ��ʽ�� 
    $.fn.bankList = function(options){ 
        var defaults = { 
            deimiter : ' ' // �ָ��� 
        }; 
        var opts = $.extend({}, defaults, options); 
        return this.each(function(){ 
            $(this).text($(this).text().replace(/\s/g,'').replace(/(\d{4})(?=\d)/g,"$1"+opts.deimiter));
			alert(3);
        }) 
    } 
})(jQuery);
