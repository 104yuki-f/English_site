'use strict';
window.onload=()=>{
	const words=[
		['賛成する','agree','agree.jpg'],
		["反対する","oppose","oppose.jpg"],
		["～に忠告する","advise","advise.jpg"],
		["助言","tip","tip.jpg"],
		["議論する","discuss","discuss.jpg"],
		["に責任があるとする","blame","blame.jpg"],
		["主張する","argue","argue.jpg"],
		["～と主張する","claim","claim.jpg"],
		["文句を言う、苦情を言う","complain","complain.jpg"],
		["申し出る","offer","offer.jpg"],
		["〜を示唆する、〜を提案する","suggest","suggest.jpg"],
		["推薦する、勧める","recommend","recommend.jpg"],
		["感謝している","grateful","grateful.jpg"],
		["謝る","apologize","apologize.jpg"],
		["言い訳","excuse","excuse.jpg"],
		["祝う","celebrate","celebrate.jpg"],
		["～に感心する","admire","admire.jpg"],
		["感動させる","impress","impress.jpg"],
		["賞","award","award.jpg"],
		["特徴を説明する","describe","describe.jpg"],
		["分かりやすく説明する","explain","explain.jpg"],
		["伝える、話し合う、意思疎通する","communicate","communicate.jpg"],
		["表現する","express","express.jpg"],
		["約束する","promise","promise.jpg"],
		["情報","information","information.jpg"],
		["科学技術","technology","technology.jpg"],
		["研究、調査","research","research.jpg"],
		["素材、物質、材料","material","material.jpg"],
		["人工的な","artificial","artificial.jpg"],
		["電気の","electric","electric.jpg"],
		["～を発明する","invent","invent.jpg"],
		["を発見する；に気づく","discover","discover.jpg"],
		["技能、技術","skill","skill.jpg"],
		["能力","ability","ability.jpg"],
		["才能","talent","talent.jpg"],
		["努力","effort","effort.jpg"],
		["練習する","practice","practice.jpg"],
		["試合","game","game.jpg"],
		["～を達成する","achieve","achieve.jpg"],
		["何とかして〜する、〜を管理する","manage","manage.jpg"],
		["～を向上させる","improve","improve.jpg"],
		["～を生産する","produce","produce.jpg"],
		["創造する","create","create.jpg"],
		["～を確立する","establish","establish.jpg"],
		["〜を省く、〜を救う、〜を貯蓄する","save","save.jpg"],
		["薬","medicine","medicine.jpg"],
		["患者","患者","患者.jpg"],
		["状態、状況","condition","condition.jpg"],
		["医学の、医療の","medical","medical.jpg"],
		["ストレス","stress","stress.jpg"],
		["苦しむ","suffer","suffer.jpg"],
		["運動する","exercise","exercise.jpg"],
		["呼吸する","breathe","breathe.jpg"],
		["のどが渇いた","thirsty","thirsty.jpg"],
		["身体の","physical","physical.jpg"],
		["熱","fever","fever.jpg"],
		["体力","strength","strength.jpg"],
		["涙、引き裂く","tear","tear.jpg"],
		["味、好み","taste","taste.jpg"],
		["規則、支配する","rule","rule.jpg"],
		["役割","role","role.jpg"],
		["習慣、癖","habit","habit.jpg"],
		["習慣","custom","custom.jpg"],
		["伝統","tradition","tradition.jpg"],
		["社会","society","society.jpg"],
		["法律、法則","law","law.jpg"],
		["先祖、祖先","ancestor","ancestor.jpg"],
		["人口","population","population.jpg"],
		["母国の","native","native.jpg"],
		["海外へ、海外で","abroad","abroad.jpg"],
		["その土地の","local","local.jpg"],
		["調査する","survey","survey.jpg"],
		["証拠","evidence","evidence.jpg"],
		["価値","value","value.jpg"],
		["財宝","treasure","treasure.jpg"],
		["流行の","fashion","fashion.jpg"],
		["大衆、公共の","public","public.jpg"],
		["投票","vote","vote.jpg"],
		["政府","govenment","govenment.jpg"],
		["国家、国民","nation","nation.jpg"],
		["首都、資本","capital","capital.jpg"],
		["州","state","state.jpg"],
		["政治的な","political","political.jpg"],
		["価格","price","price.jpg"],
		["～を要する","cost","cost.jpg"],
		["金額、合計","sum","sum.jpg"],
		["予算","budget","budget.jpg"],
		["料金","fee","fee.jpg"],
		["運賃","fare","fare.jpg"],
		["勘定、請求書、手形","bill","bill.jpg"],
		["貿易","trade","trade.jpg"],
		["富","wealth","wealth.jpg"],
		["経済","economy","economy.jpg"],
		["会社","company","company.jpg"],
		["仕事","task","task.jpg"],
		["稼ぐ","earn","earn.jpg"],
		["痛む","hurt","hurt.jpg"],
		["を痛める、傷つける","injure","injure.jpg"],
		["～に損害を与える","damage","damage.jpg"],
		["～を発達させる","develop","develop.jpg"],
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
		ja.classList.remove("fade");
		if (ans == words[index][1]){
			correct++;
			msg='正解!';
		}else{
			msg=`不正解!${words[index][0]}の英単語は${words[index][1]}`;
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
		img.src='https://104yuki-f.github.io/104yuki-f/images/words/'+words[index][2];
	}
	setItem(index);
}
