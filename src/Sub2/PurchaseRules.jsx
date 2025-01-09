import { useState } from "react";

import Up from '/Vector1.png'
import Down from '/Vector2.png'


const StepData = [
    {number:'01', title:'イヤホン本体の状態確認', description1:'・外観にキズや汚れがないか確認。', description2:'・動作確認を行い、正常に機能しているかチェック。'},
    {number:'02', title:'付属品', description1:'・イヤホンケース、イヤーピース（全サイズ）、充電ケーブル、取扱説明書、外箱などが揃っていると査定額がアップする可能性があります。'},
    {number:'03', title:'購入証明書', description1:'・レシートや保証書など。', description2:'',description3:''},
    {number:'04', title:'イヤホンの状態の詳しい確認', description1:'・外観のキズや汚れ', description2:'・動作の不具合',description3:'・付属品の欠品の有無'},
    {number:'05', title:'価格交渉', description1:'・提示された価格に納得がいかない場合、交渉することも可能です。'},
    {number:'06', title:'買取成立', description1:'・即日現金化される場合もありますが、オンライン買取では銀行振込になることが一般的です。'},
];



function Step ( { number, title, description1, description2, description3 })  {

    return (
        <div className="step-card">
        <h2 className="step-number">{number}</h2>
        <h3 className="step-title">{title}</h3>
        <div className="step-description">
            <p className="step-description1">{description1}</p>
            {description2 && <p className="step-description2">{description2}</p> }
            {description3 && <p className="step-description3">{description3}</p>  }
        </div>
      </div>       
    )
};

function PurchaseRules () {
    const [ stepOpen, setStepOpen ] = useState(false);

    const toggleStep = () => {
        setStepOpen(!stepOpen);
    }
    return(
        <>
    <div className="rules">
        <h2 
        className="togglestep"
        onClick={toggleStep}
        >
          査定の手順について 
          <span className="togglesteps">
          <img src={stepOpen ? Down : Up} alt="toggle icon" />
            </span>
        </h2>
      

      {stepOpen && (
        <div className="steps-grid">
          {StepData.map((step) => (
            <Step
              key={step.number}
              number={step.number}
              title={step.title}
              description1={step.description1}
              description2={step.description2}
              description3={step.description3}
            />
          ))}
        </div>
      )}

    </div>  
        </>
    )
}

export default PurchaseRules;