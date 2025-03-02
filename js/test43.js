'use strict';
window.onload=()=>{
	const words=[
		['〜を抑制する','curb','curb.jpg'],
		['〜を止める','halt','halt.jpg'],
		['〜を活気づける','animate','animate.jpg'],
		['〜を駆り立てる','spur','spur.jpg'],
		['〜を誘い込む','lure','lure.jpg'],
		['〜をせき立てる','urge','urge.jpg'],
		['〜を刺激する','stimulate','stimulate.jpg'],
		['に強制する','compel','compel.jpg'],
		['〜を書き取らせる','dictate','dictate.jpg'],
		['〜をぼやかす','blur','blur.jpg'],
		['の方向を変える','divert','divert.jpg'],
		['〜を逆転する','reverse','reverse.jpg'],
		['を補う','supplement','supplement.jpg'],
		['〜をもたらす','pose','pose.jpg'],
		['散策する','stroll','stroll.jpg'],
		['をすくめる','shrug','shrug.jpg'],
		['臭いをかぐ','sniff','sniff.jpg'],
		['〜を擁護する','embrace','embrace.jpg'],
		['抑制する','restrain','restrain.jpg'],
		['裏切る','betray','betray.jpg'],
		['だます','deceive','deceive.jpg'],
		['いじめる','bully','bully.jpg'],
		['しぼる','squeeze','squeeze.jpg'],
		['を差し込む','insert','insert.jpg'],
		['切り離す','detach','detach.jpg'],
		['引き出す','withdraw','withdraw.jpg'],
		['に耐える','withstand','withstand.jpg'],
		['働かせる','exert','exert.jpg'],
		['をまとめる','compile','compile.jpg'],
		['拾い読みする','browse','browse.jpg'],
		['操作する','manipulate','manipulate.jpg'],
		['実行する','implement','implement.jpg'],
		['遂行する','execute','execute.jpg'],
		['主催する','host','host.jpg'],
		['すえつける','mount','mount.jpg'],
		['排出する','discharge','discharge.jpg'],
		['水を抜く','drain','drain.jpg'],
		['浸す','soak','soak.jpg'],
		['吊るす','suspend','suspend.jpg'],
		['取り出す','extract','extract.jpg'],
		['呼び出す','summon','summon.jpg'],
		['着手する','embark','embark.jpg'],
		['強く押す','thrust','thrust.jpg'],
		['入り込む','penetrate','penetrate.jpg'],
		['立ち入る','intrude','intrude.jpg'],
		['をのがれる','evade','evade.jpg'],
		['利用する','utilize','ilize.jpg'],
		['ぐるぐる回る','spin','spin.jpg'],
		['突っ込む','plunge','plunge.jpg'],
		['ガタガタ鳴る','rattle','rattle.jpg'],
		['消える','vanish','vanish.jpg'],
		['〜しなくなる','cease','cease.jpg'],
		['急ぐこと','haste','haste.jpg'],
		['隠す','conceal','conceal.jpg'],
		['を隠す','disguise','disguise.jpg'],
		['同時に起こる','coincide','coincide.jpg'],
		['普及している','prevail','prevail.jpg'],
		['維持する','sustain','sustain.jpg'],
		['残る','linger','linger.jpg'],
		['生き返る','revive','revive.jpg'],
		['再開する','resume','resume.jpg'],
		['検査する','inspect','inspect.jpg'],
		['調査する','investigate','investigate.jpg'],
		['探知する','detect','detect.jpg'],
		['見分ける','discern','discern.jpg'],
		['探検','expedition','expedition.jpg'],
		['入学する','enroll','enroll.jpg'],
		['しつける','discipline','discipline.jpg'],
		['詰め込み勉強をする','cram','cram.jpg'],
		['能力','faculty','faculty.jpg'],
		['授業料','tuition','tuition.jpg'],
		['卒業証書','diploma','diploma.jpg'],
		['指導する','mentor','mentor.jpg'],
		['倫理','ethic','ethic.jpg'],
		['天文学','astronomy','astronomy.jpg'],
		['考古学者','archaeologist','archaeologist.jpg'],
		['人類学者','anthropologist','anthropologist.jpg'],
		['認識する','perceive','perceive.jpg'],
		['理解する','grasp','grasp.jpg'],
		['思い浮かべる','conceive','conceive.jpg'],
		['予想する','anticipate','anticipate.jpg'],
		['を予知する','foresee','foresee.jpg'],
		['推測する','speculate','speculate.jpg'],
		['推論する','infer','infer.jpg'],
		['推定する','deduce','deduce.jpg'],
		['熟考する(p)','ponder','ponder.jpg'],
		['熟考する(c)','contemplate','contemplate.jpg'],
		['保証する','assure','assure.jpg'],
		['評価する(a)','assess','assess.jpg'],
		['評価する(e)','evaluate','evaluate.jpg'],
		['確かめる','verify','verify.jpg'],
		['妥協する','compromise','compromise.jpg'],
		['を調和させる','reconcile','reconcile.jpg'],
		['油断のない','alert','alert.jpg'],
		['固定観念','stereotype','stereotype.jpg'],
		['観点','perspective','perspective.jpg'],
		['見通し','prospect','prospect.jpg'],
		['誓う','vow','vow.jpg'],
		['直感','intution','intution.jpg'],
		['幻想','illusion','illusion.jpg'],
	];
	const ja =document.getElementById('ja');
	const entry=document.getElementById('entry');
	const img=document.getElementById('img');
	const btn=document.getElementById('btn');
	const result=document.getElementById('result');
	let index=0;
	let correct=0;
	btn.addEventListener('click',()=>{
		let ans=entry.value.toLowerCase();
		let msg='';
		if (ans == words[index][1]){
			correct++;
			msg='正解!';
		}else{
			msg=`不正解!正しくは${words[index][1]}`;
		}
		if(index==words.length-1){
			msg+=`<br>全${words.length}問中,${correct}問正解`;
			index=-1;
		}
		result.innerHTML=msg;
		result.classList.remove('fade');
		setTimeout(function(){
			result.classList.add('fade');
		},1500);
		setItem(++index);
		entry.focus();
	});
	function setItem(index){
		entry.value='';
		ja.textContent=words[index][0];
		img.src='../images/words/'+words[index][2];
	}
	setItem(index);
}
