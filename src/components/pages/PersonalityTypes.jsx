import React from "react";
import architectImg from "../../../src/assets/images/Researching-bro.png";
import logicienImg from "../../../src/assets/images/Science-bro.png";
import commandantImg from "../../../src/assets/images/In progress-bro.png";
import innovateurImg from "../../../src/assets/images/Finding brilliant ideas-bro.png";
import avocatImg from "../../../src/assets/images/prosecutor-bro.png";
import mediateurImg from "../../../src/assets/images/Contemplating-bro.png";
import protagonisteImg from "../../../src/assets/images/Self confidence-bro.png";
import inspiratuerImg from "../../../src/assets/images/Design inspiration-bro.png";
import logisticienImg from "../../../src/assets/images/Online report-bro.png";
import defenseurImg from "../../../src/assets/images/Lawyer-bro.png";
import consulImg from "../../../src/assets/images/Sushi cook-bro.png";
import directeurImg from "../../../src/assets/images/Problem solving-bro.png";
import virtuoseImg from "../../../src/assets/images/Done-bro.png";
import aventurierImg from "../../../src/assets/images/Exploring-bro.png";
import entrepreneurImg from "../../../src/assets/images/Team goals-bro.png";
import amuseurImg from "../../../src/assets/images/Bachelor party-bro.png";

const PersonalityTypes = () => {
  return (
    <div className="bg-white md:py-20 py-20 flex flex-col items-center justify-center text-center overflow-hidden ">
      <div className="text-2xl md:text-4xl lg:text-5xl font-bold py-12">
        Types de personnalité
      </div>
      <div className="w-full h-full bg-lightPrincipal mt-6">
        <ul className="w-full flex items-center justify-evenly">
          <li className="list-none h-0 w-0 border-l-[210px] border-l-transparent border-t-[30px] border-t-white border-r-[210px] border-r-transparent"></li>
          <li className="list-none h-0 w-0 border-l-[210px] border-l-transparent border-t-[30px] border-t-white border-r-[210px] border-r-transparent hidden md:block"></li>
          <li className="list-none h-0 w-0 border-l-[210px] border-l-transparent border-t-[30px] border-t-white border-r-[210px] border-r-transparent hidden  lg:block"></li>
          <li className="list-none h-0 w-0 border-l-[210px] border-l-transparent border-t-[30px] border-t-white border-r-[210px] border-r-transparent hidden  lg:block"></li>
        </ul>
        <div className="text-white text-4xl md:text-6xl lg:text-6xl font-bold mt-12">
          Les analystes
        </div>
        <div className="w-full grid md:max-lg:grid-cols-2 md:max-lg:gap-4 md:grid-cols-4 gap-8 justify-items-center p-10">
          <div className="w-auto flex flex-col  gap-1 items-center">
            <img src={logicienImg} alt="" className="w-60" />
            <div className="text-xl md:text-2xl text-principal font-bold ">
              Logicien
            </div>
            <div className="text-slate-900 font-bold">INTP</div>
            <span className="text-white">
              Inventeurs innovateurs démontrant une soif inextinguible de
              connaissances
            </span>
          </div>
          <div className="w-auto flex flex-col  gap-1 items-center justify-center text-center">
            <img src={architectImg} alt="" className="w-60" />
            <div className="text-xl md:text-2xl text-principal font-bold ">
              Architecte
            </div>
            <div className="text-slate-900 font-bold">INTG</div>
            <span className="text-white">
              Penseur, imaginatifs et stratege, avec un plan pour tout
            </span>
          </div>

          <div className="w-auto flex flex-col gap-1 items-center">
            <img src={innovateurImg} alt="" className="w-60" />
            <div className="text-xl md:text-2xl text-principal font-bold ">
              Innovateur
            </div>
            <div className="text-slate-900 font-bold">ENTP</div>
            <span className="text-white">
              Penseurs astucieux et curieux incapables de résister à un défi
              intellectuel.
            </span>
          </div>
          <div className="w-auto flex flex-col  gap-1 items-center">
            <img src={commandantImg} alt="" className="w-60" />
            <div className="text-xl md:text-2xl text-principal font-bold ">
              Commandant
            </div>
            <div className="text-slate-900 font-bold">ENTJ</div>
            <span className="text-white">
              Leaders hardis et imaginatifs, déterminés à réussir quelles que
              soient les circonstances.
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-lightRed">
        <div className="text-white text-4xl md:text-6xl lg:text-6xl font-bold mt-12">
          Les displomates
        </div>

        <div className="w-full grid md:max-lg:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center p-10">
          <div className="w-auto flex flex-col gap-1 items-center">
            <img src={protagonisteImg} alt="" className="w-60" />
            <div className="text-xl md:text-2xl  text-pink-600  font-bold ">
              Protagoniste
            </div>
            <div className="text-slate-900 font-bold">ENFJ</div>
            <span className="text-white">
              Leaders charismatiques et inspirants, capables de fasciner leur
              public.
            </span>
          </div>
          <div className="w-auto flex flex-col  gap-1 items-center">
            <img src={avocatImg} alt="" className="w-60" />
            <div className="text-xl md:text-2xl text-pink-600 font-bold ">
              Avocat
            </div>
            <div className="text-slate-900 font-bold">INFJ</div>
            <span className="text-white">
              Idéalistes calmes et mystiques et pourtant très inspirants et
              infatigables.
            </span>
          </div>
          <div className="w-auto flex flex-col  gap-1 items-center justify-center text-center">
            <img src={mediateurImg} alt="" className="w-60" />
            <div className="text-xl md:text-2xl  text-pink-600  font-bold ">
              Médiateur
            </div>
            <div className="text-slate-900 font-bold">INFP</div>
            <span className="text-white">
              Âmes poétiques, bienveillantes et engagées dans les bonnes causes.
            </span>
          </div>

          <div className="w-auto flex flex-col  gap-1 items-center">
            <img src={inspiratuerImg} alt="" className="w-60" />
            <div className="text-xl md:text-2xl  text-pink-600  font-bold ">
              Inspirateur
            </div>
            <div className="text-slate-900 font-bold">ENFP</div>
            <span className="text-white">
              Esprits libres, créatifs et joyeux, toujours prêts à sourire.
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-lightBlue">
        <div className="text-white text-4xl md:text-6xl lg:text-6xl font-bold mt-12">
          Les sentinelles
        </div>

        <div className="w-full grid md:max-lg:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center p-10">
          <div className="w-auto flex flex-col gap-1 items-center">
            <img src={logisticienImg} alt="" className="w-60" />
            <div className="text-xl md:text-2xl  text-softRed font-bold ">
              Logisticien
            </div>
            <div className="text-slate-900 font-bold">ISTJ</div>
            <span className="text-white">
              Individus pragmatiques et intéressés par les faits, dont le
              sérieux ne saurait être mis en cause.
            </span>
          </div>
          <div className="w-auto flex flex-col  gap-1 items-center">
            <img src={defenseurImg} alt="" className="w-60" />
            <div className="text-xl md:text-2xl text-softRed font-bold ">
              Défenseur
            </div>
            <div className="text-slate-900 font-bold">ISFJ</div>
            <span className="text-white">
              Protecteurs très dévoués et très chaleureux, toujours prêts à
              défendre ceux qu’ils aiment.
            </span>
          </div>
          <div className="w-auto flex flex-col  gap-1 items-center justify-center text-center">
            <img src={consulImg} alt="" className="w-60" />
            <div className="text-xl md:text-2xl  text-softRed  font-bold ">
              Consul
            </div>
            <div className="text-slate-900 font-bold">ESFJ</div>
            <span className="text-white">
              Personnes extraordinairement attentionnées, sociables et
              populaires, toujours prêtes à aider les autres.
            </span>
          </div>

          <div className="w-auto flex flex-col  gap-1 items-center">
            <img src={directeurImg} alt="" className="w-60" />
            <div className="text-xl md:text-2xl  text-softRed  font-bold ">
              Directeur
            </div>
            <div className="text-slate-900 font-bold">ESTJ</div>
            <span className="text-white">
              Excellents gestionnaires, d’une efficacité inégalée quand il
              s’agit de gérer les choses, ou les gens.
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-lightYellow">
        <div className="text-white text-4xl md:text-6xl lg:text-6xl font-bold mt-12">
          Les sentinelles
        </div>

        <div className="w-full grid md:max-lg:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center p-10">
          <div className="w-auto flex flex-col gap-1 items-center">
            <img src={virtuoseImg} alt="" className="w-60" />
            <div className="text-xl md:text-2xl  text-softRed font-bold ">
              Virtuose
            </div>
            <div className="text-slate-900 font-bold">ISTP</div>
            <span className="text-white">
              Expérimentateurs hardis et pragmatiques, maîtres de toutes sortes
              d’outils
            </span>
          </div>
          <div className="w-auto flex flex-col  gap-1 items-center">
            <img src={aventurierImg} alt="" className="w-60" />
            <div className="text-xl md:text-2xl text-softRed font-bold ">
              Aventurier
            </div>
            <div className="text-slate-900 font-bold">ISFP</div>
            <span className="text-white">
              Artistes flexibles, charmants et toujours curieux de découvrir.
            </span>
          </div>
          <div className="w-auto flex flex-col  gap-1 items-center">
            <img src={entrepreneurImg} alt="" className="w-60" />
            <div className="text-xl md:text-2xl  text-softRed  font-bold ">
              Entrepreneur
            </div>
            <div className="text-slate-900 font-bold">ESTP</div>
            <span className="text-white">
              Personnalités vives, perspicaces et énergiques, vivant dans
              l'innovation.
            </span>
          </div>

          <div className="w-auto flex flex-col  gap-1 items-center">
            <img src={amuseurImg} alt="" className="w-60" />
            <div className="text-xl md:text-2xl  text-softRed  font-bold ">
              Amuseur
            </div>
            <div className="text-slate-900 font-bold">ESFP</div>
            <span className="text-white">
              Amuseurs spontanés, énergiques et enthousiastes avec eux, on ne
              s’ennuie jamais.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalityTypes;
