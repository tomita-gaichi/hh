      //電卓
      'use strict'
{
  const num_bth = document.querySelectorAll('.num_bth');
  let output_sub = document.getElementById('output_sub');//計算結果を表示する場所
  const output_total = document.getElementById('output_sub');//計算過程を表示する場所
  let total = 0;//計算式を表す変数 
  let state = 'start';//最初の状態を定義
    //  1)計算する前の最初の状態（start）　
    //  2)数字を入力している最中（calculation）
    //  3)「＋　÷　－　×　＝」を押した直後（calBtn）
    //  4)「＝」を教えて計算が終わった直後（finish）
    //  変数stateに、star,calculation, calBtn, finishを代入して状態を管理します。  
  let mode = 'integer_mode'; //最初は整数入力モード
  //  変数modeに、整数入力中integer_mode、小数入力中decimal_modeを定義します。


  // 1-9の数字ボタンを押した時
    const one_nine = document.querySelectorAll('.one_nine');
    one_nine.forEach(index => {     
      index.addEventListener('click', () => {
        if(state === 'start') {
          //最初totalに打った数字を代入する
          total = index.dataset.indexId;         
        }else if(state === 'finish') {
          //計算後は、リセット処理後に、totalに打った数字を代入する
          reset();
          total = index.dataset.indexId;  
        }else if(state === 'calculation'||state === 'calBtn'){
          //計算中totalに打った数字を追加して、totalに代入する。
          total += index.dataset.indexId;
        }     
        output_sub.textContent = total;
        state = 'calculation'//数字を入力している状態にする。
      }) //click   
    })//forEach

  // 0の数字ボタンを押した時
  const zero = document.getElementById('zero');
  zero.addEventListener('click', () => {
//    - 最初state==='start
//    - 計算終了後state==='finish'
//    - 演算記号入力直後state==='calBtn'の時、
//    前の文字が0の時は0が入力できないようにする。
  if(state==='start'||state==='finish'||state==='calBtn'){
      if(output_sub.textContent.slice(-1) === '0') {
        //sliceで切り出されたのは0ではなく'0'
        console.log('前の文字はゼロ');
        return;
      }
    }

    if(state==='start') {
      total = zero.dataset.indexId;  
    }else{
      total += zero.dataset.indexId;
    }      
    output_sub.textContent = total;
//    state = 'calculation'//数字を入力している状態にする。
  }) //click    

  // 「.」小数点ボタンを押した時

  //「＋　÷　－　×」ボタンを押した時
  const cal = document.querySelectorAll('.cal');
  cal.forEach(index => {     
    index.addEventListener('click', () => {
      if(state === 'start') {
        return;//最初記号は押せない
      }else if(state === 'calculation'){
        total += index.dataset.indexId;//計算中はtotalに打った記号を追加し、totalに代入する。
      }else if(state === 'finish'){
        //計算後は前の計算結果をtotal に代入して計算しなおす。
        total = output_total.textContent;
        total += index.dataset.indexId;
        output_total.textContent = 0
      }else if(state ==='calBtn') {
        // 演算記号入力状態state = 'calBtn'の時に、演算記号を押したら、totalの最後の一文字（演算記号）を削除し、新たに押した演算記号を追加する。
//        →totalに、totalの最初から最後から二文字目までを代入する（最後の一文字を削除する）
        total = total.slice(0, -1)
        total += index.dataset.indexId;
      }

      output_sub.textContent = total;
      state = 'calBtn'//演算記号を入力している状態する。
      mode ='integer_mode'//整数モードに戻す
    }) //click   
  })//forEach

  //イコールを押した時
  const equal_btn = document.getElementById('equal_btn');
  equal_btn.addEventListener('click',() =>{
    console.log(eval(total));
    output_total.textContent = eval(total);
    state = 'finish'//計算が終わった状態にする。
    mode ='integer_mode'//整数モードに戻す
  });

  //Cボタン（リセットボタン）を押した時の処理
  const clear = document.getElementById('clear')
  clear.addEventListener('click', () => {
    reset();
  })

 //リセットを行う関数
  function reset() {
    total = 0; 
    output_sub.textContent = 0;
    output_total.textContent = 0;
    mode ='integer_mode'//整数モードに戻す
  }

  //BSボタン（バックスペース）を押した時の処理
  const bs = document.getElementById('bs')
  bs.addEventListener('click', () => {
    console.log('BS')
    if(state ==="finish") {
      return;//計算後は、bsを押せない。
    }else{
//      一文字目から、最後から二文字目までをtotalに代入（最後の一文字を除きtotalに代入する）
      total = output_sub.textContent.slice(0, -1);
      output_sub.textContent = total;
    }
  })

}