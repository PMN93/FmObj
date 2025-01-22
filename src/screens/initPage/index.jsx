import React, { useState } from "react";
import mascote from "../../assets/cenoura.png";
import zap from "../../assets/zap.png";
import {PencilSquareIcon} from "@heroicons/react/16/solid";
import {ArrowDownTrayIcon} from "@heroicons/react/16/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import {
  ArrowRightStartOnRectangleIcon,
  Bars4Icon,
  XMarkIcon,
} from "@heroicons/react/16/solid";

const InitPage = () => {
  const [openBar, setOpenBar] = useState(false);
  const [genero, setGenero] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const almoco = [
    "Frango🍗",
    "Patinho🥩",
    "Alcatra🥩",
    "Carne Moida🥩",
    "Mandioca🥔",
    "Carne-Porco🐖",
    "Batata-Doce🍠",
    "Tilápia🐟",
    "Merluza🐟",
    "Salmão🐟",
    "Arroz🍚",
    "Feijão🍲",
    "Salada🥗",
    "Macarrão🍝",
    "Ovo🥚",
    "Inhame🍠",
    "Cuscuz🍚",
    "Batata🥔",
  ];

  const cafemanha = [
    "Tapioca + Frango🥙",
    "Crepioca + Queijo🥞",
    "Fruta🍎",
    "Iogurte🥛",
    "Café☕",
    "Pão de Queijo🧀",
    "Pão + Ovo🥖",
    "Café + Leite☕",
    "Cuscuz 🍚",
    "Pão + Queijo🍞",
    "Pão + Presunto🥓"
  ];

  const cafetarde = [
    "Whey🥛",
    "Fruta🍍",
    "Cuscuz🍚",
    "Pão + Ovo🥖",
    "Tapioca + Frango🥙",
    "Crepioca + Queijo🥞",
    "Leite🥛",
    "Rap10 + Frango🌯",
    "Ovo🥚",
    "Sanduíche Frango🥪",
    "Sanduíche de Peru🥪",
    "Suco🥤"
  ];

  const janta = [
    "Frango🍗",
    "Patinho🥩",
    "Alcatra🥩",
    "Carne Moida🥩",
    "Mandioca🥔",
    "Carne-Porco🐖",
    "Batata-Doce🍠",
    "Tilápia🐟",
    "Merluza🐟",
    "Suco🥤",
    "Arroz🍚",
    "Feijão🍲",
    "Salada🥗",
    "Macarrão🍝",
    "Ovo🥚",
    "Inhame🍠",
    "Cuscuz🍚",
    "Batata🥔"
  ];

  return (
    <div
      className={
        openBar == true
          ? "flex flex-col w-auto h-screen overflow-auto overflow-x-hidden relative"
          : "flex flex-col w-auto h-screen overflow-auto overflow-x-hidden relative"
      }
    >
      <div className="flex w-screen min-h-14 border items-center px-5">
        <button
          onClick={() => {
            setOpenBar(true);
          }}
          className="left-5 z-40"
        >
          <Bars4Icon className="w-6 h-6 text-orange-500" />
        </button>
        <div className="flex flex-row w-full items-center justify-center left-1/2 transform -translate-x-1/2 absolute">
          <div className="font-semibold text-2xl text-orange-400">
            Master Nutri
          </div>
          <div>
            <img className="w-14" src={mascote}></img>
          </div>
        </div>
      </div>
      <div className="flex w-screen h-8 items-center justify-center bg-orange-500 shadow-sm text-white">
        Preencha suas medidas abaixo ↓
      </div>

      <div className="flex flex-col w-screen items-center justify-center">
        <div className="flex pr-16 pl-16 pt-3 pb-3 w-auto h-auto border border-gray-200 rounded-[1.2rem] mt-2 shadow-sm items-center justify-center flex-wrap space-x-32">
          <div className="flex flex-col items-center">
            🍑<p>Ver Dieta</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-5" src={zap}></img>
            <p>Suporte</p>
          </div>
        </div>

        <div className="flex flex-col p-5 md:min-w-[50rem] w-96 h-auto rounded-[1.2rem] mt-5 mb-5 shadow-lg border items-center justify-center">
          <div className="flex w-full h-8 border border-gray-200 rounded-[1.2rem] shadow-sm bg-gray-50 mb-5">
            <div className="flex w-[9rem] h-8 border-r-2 border-gray-200 rounded-[1.2rem] bg-orange-500 text-white items-center justify-center">
              Medidas
            </div>
          </div>
          <input
            className="border border-gray-300 p-2 rounded-md w-full mb-4"
            type="number"
            placeholder="Peso"
          ></input>
          <input
            className="border border-gray-300 p-2 rounded-md w-full mb-4"
            type="number"
            placeholder="Altura"
          ></input>
          <input
            className="border border-gray-300 p-2 rounded-md w-full mb-4"
            type="number"
            placeholder="Idade"
          ></input>
          <select className="border border-gray-300 p-2 rounded-md w-full mb-4">
            <option value={"Objetivo"}>Selecione seu objetivo</option>
            <option value={"Objetivo"}>Emagrecer</option>
            <option value={"Objetivo"}>Ganho de Massa Muscular</option>
            <option value={"Objetivo"}>Definição + Massa Muscular</option>
            <option value={"Objetivo"}>Definição</option>
            <option value={"Objetivo"}>Emagrecer + Massa Muscular</option>
          </select>
          <select className="border border-gray-300 p-2 rounded-md w-full mb-4">
            <option value={"Objetivo"}>
              Calorias desejadas para a dieta 🔥{" "}
            </option>
            <option value={"Objetivo"}>Não sei dizer</option>
            <option value={"Objetivo"}>1200 a 1500 calorias</option>
            <option value={"Objetivo"}>1600 a 1900 caloria</option>
            <option value={"Objetivo"}>2000 a 2300 calorias</option>
            <option value={"Objetivo"}>2400 a 2700 calorias</option>
          </select>
          <div className="flex w-auto items-center justify-center flex-wrap space-x-32">
            <button
              className={
                genero == "masculino"
                  ? "border border-orange-500 bg-orange-50 text-orange-500 p-4 rounded-lg font-semibold"
                  : "border border-gray-300 p-4 rounded-lg"
              }
              onClick={() => {
                setGenero("masculino");
              }}
            >
              Masculino
            </button>
            <button
              className={
                genero == "feminino"
                  ? "border border-orange-500 bg-orange-50 text-orange-500 p-4 rounded-lg font-semibold"
                  : "border border-gray-300 p-4 rounded-lg"
              }
              onClick={() => {
                setGenero("feminino");
              }}
            >
              Feminino
            </button>
          </div>
        </div>

        <div className="flex flex-col p-5 md:min-w-[50rem] w-96 h-auto rounded-[1.2rem] mb-5 shadow-lg border items-center justify-center">
          <div className="flex font-bold text-xl mb-10">Café da Manhã ☕</div>
          <div className="flex items-center justify-center flex-wrap gap-4 ">
          {cafemanha.map((item) => (
          <div
            key={item}
            className={`flex min-w-[12rem] h-8 border border-gray-300 rounded-[1.2rem] items-center justify-center mb-8 cursor-pointer ${
              selectedItems.includes(item) ? "bg-orange-200 border border-orange-500" : "bg-white"
            }`}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </div>
        ))}
          </div>
        </div>

        <div className="flex flex-col p-5 md:min-w-[50rem] w-96 h-auto rounded-[1.2rem] mb-5 shadow-lg border items-center justify-center">
          <div className="flex font-bold text-xl mb-10">Almoço 🍽️</div>
          <div className="flex items-center justify-center flex-wrap gap-4 ">
          {almoco.map((item) => (
          <div
            key={item}
            className={`flex min-w-[12rem] h-8 border border-gray-300 rounded-[1.2rem] items-center justify-center mb-8 cursor-pointer ${
              selectedItems.includes(item) ? "bg-orange-200 border border-orange-500" : "bg-white"
            }`}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </div>
        ))}
          </div>
        </div>

        <div className="flex flex-col p-5 md:min-w-[50rem] w-96 h-auto rounded-[1.2rem] mb-5 shadow-lg border items-center justify-center">
          <div className="flex font-bold text-xl mb-10">Lanche da Manhã e Tarde 🥪</div>
          <div className="flex items-center justify-center flex-wrap gap-4 ">
          {cafetarde.map((item) => (
          <div
            key={item}
            className={`flex min-w-[12rem] h-8 border border-gray-300 rounded-[1.2rem] items-center justify-center mb-8 cursor-pointer ${
              selectedItems.includes(item) ? "bg-orange-200 border border-orange-500" : "bg-white"
            }`}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </div>
        ))}
          </div>
        </div>

        <div className="flex flex-col p-5 md:min-w-[50rem] w-96 h-auto rounded-[1.2rem] mb-5 shadow-lg border items-center justify-center">
          <div className="flex font-bold text-xl mb-10">Jantar 🍽️</div>
          <div className="flex items-center justify-center flex-wrap gap-4 ">
          {janta.map((item) => (
          <div
            key={item}
            className={`flex min-w-[12rem] h-8 border border-gray-300 rounded-[1.2rem] items-center justify-center mb-8 cursor-pointer ${
              selectedItems.includes(item) ? "bg-orange-200 border border-orange-500" : "bg-white"
            }`}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </div>
        ))}
          </div>
        </div>

        <div className="flex flex-col p-5 md:min-w-[50rem] w-96 h-auto rounded-[1.2rem] mb-5 shadow-lg border items-center justify-center">
          <div className="flex font-bold text-xl mb-10">Treinos e Atividades 🏋🏻‍♀️</div>
          <div className="flex flex-col w-full items-center justify-center">


          <select className="border border-gray-300 p-2 rounded-md w-full mb-4">
            <option value={"Objetivo"}>
              Nível de Atividade Física{" "}
            </option>
            <option value={"Objetivo"}>Sedentário (pouca ou nenhuma atividade física)</option>
            <option value={"Objetivo"}>Levemente ativo (exercícios 1 a 3 vezes por semana)</option>
            <option value={"Objetivo"}>Moderadamente ativo (exercícios de 3 a 5 vezes por semana)</option>
            <option value={"Objetivo"}>Altamente ativo (exercícios de 5 a 7 dias por semana)</option>
            <option value={"Objetivo"}>Extremamente ativo (exercícios todos dias e faz trabalho braçal)</option>
            </select>


            <select className="border border-gray-300 p-2 rounded-md w-full mb-4">
            <option value={"Objetivo"}>
              Deseja treino?{" "}
            </option>
            <option value={"Objetivo"}>Sim, treino na academia</option>
            <option value={"Objetivo"}>Sim, treino em casa</option>
            <option value={"Objetivo"}>Não</option>
          </select>
          </div>
        </div>

        <div className="flex flex-col p-5 md:min-w-[50rem] w-96 h-auto rounded-[1.2rem] mb-5 shadow-lg border items-center justify-center">
          <div className="flex font-bold text-xl mb-10">Adicionais na Dieta 🥗</div>
          <div className="flex flex-col w-full items-center justify-center">
          <select className="border border-gray-300 p-2 rounded-md w-full mb-4">
            <option value={"Objetivo"}>
              Horários de cada refeição{" "}
            </option>
              <option value={"Objetivo"}>Tenho meu próprio horário</option>
              <option value={"Objetivo"}>05:30, 08:30, 12:00, 15:00, 19:00</option>
              <option value={"Objetivo"}>06:00, 09:00, 12:00, 15:00, 19:00</option>
              <option value={"Objetivo"}>06:30, 09:30, 13:00, 16:00, 20:00</option>
              <option value={"Objetivo"}>07:00, 10:00, 12:30, 15:30, 19:30</option>
              <option value={"Objetivo"}>07:30, 10:30, 12:00, 15:00, 19:00</option>
              <option value={"Objetivo"}>08:00, 11:00, 13:30, 16:30, 20:30</option>
              <option value={"Objetivo"}>09:00, 11:00, 13:00, 16:00, 21:00</option>
            </select>
            <select className="border border-gray-300 p-2 rounded-md w-full mb-4">
            <option value={"Objetivo"}>
              Chocolate na dieta?{" "}
              </option>
              <option value={"Objetivo"}>Não, obrigado</option>
              <option value={"Objetivo"}>Sim, um Bis 🍫</option>
              <option value={"Objetivo"}>Sim, um Prestígio 🍫</option>
              <option value={"Objetivo"}>Sim, um Trento 🍫</option>
              <option value={"Objetivo"}>Sim, um Baton 🍫</option>
              <option value={"Objetivo"}>Sim, um Chokito 🍫</option>
              <option value={"Objetivo"}>Sim, um Sonho de Valsa 🍫</option>
          </select>
          </div>
        </div>

        <div className="flex flex-col p-5 md:min-w-[50rem] w-11/12 h-auto rounded-[1.2rem] mb-5 shadow-lg border items-center justify-center bg-orange-500">
          <div className="flex flex-col w-full items-center justify-center">
            <div className="flex w-auto h-10 rounded-[1.2rem] bg-orange-50 items-center justify-center p-6 font-medium text-orange-900">
              Mais acessível que um café! ☕
            </div>
            <p className="mt-8 text-white text-center font-medium">Por menos de R$10,00, Você monta sua Dieta TOTALMENTE PERSONALIZADA.</p>
            <div className="flex w-full h-10 rounded-[1.2rem] bg-orange-50 items-center justify-center p-6 font-bold mt-8 text-orange-900 cursor-pointer">
              MONTAR MINHA DIETA
            </div>
          </div>
        </div>

        <div className="flex flex-col pb-10 pt-5 pl-5 pr-5 md:min-w-[50rem] w-11/12 h-auto rounded-[1.2rem] mb-5 shadow-lg border items-center justify-center">
          <div className="flex flex-col w-full items-center justify-center">
            <div className="flex rounded-full bg-orange-50 items-center justify-center p-6 font-medium">
              <PencilSquareIcon className="w-6 h-6 text-orange-500" />
            </div>
            <div className="flex items-center justify-center font-bold text-3xl text-gray-700 mt-6">
              Como Montar?
            </div>
            <p className=" text-gray-700 text-center font-medium mt-5">Por menos de R$10,00, Você monta sua Dieta TOTALMENTE PERSONALIZADA.</p>

          </div>
        </div>

        <div className="flex flex-col pb-10 pt-5 pl-5 pr-5 md:min-w-[50rem] w-11/12 h-auto rounded-[1.2rem] mb-5 shadow-lg border items-center justify-center">
          <div className="flex flex-col w-full items-center justify-center">
            <div className="flex rounded-full bg-orange-50 items-center justify-center p-6 font-medium">
              <ArrowDownTrayIcon className="w-6 h-6 text-orange-500" />
            </div>
            <div className="flex items-center justify-center font-bold text-3xl text-gray-700 mt-6">
              Como receber a Dieta?
            </div>
            <p className=" text-gray-700 text-center font-medium mt-5">Após o pagamento, volte ao site e aguarde até 5 minutos para que sua dieta seja gerada. Você poderá visualizá-la ou baixá-la em PDF.</p>

          </div>
        </div>

        <div className="flex flex-col pb-10 pt-5 pl-5 pr-5 md:min-w-[50rem] w-11/12 h-auto rounded-[1.2rem] mb-10 shadow-lg border items-center justify-center">
          <div className="flex flex-col w-full items-center justify-center">
            <div className="flex rounded-full bg-orange-50 items-center justify-center p-6 font-medium">
              <ClockIcon className="w-6 h-6 text-orange-500" />
            </div>
            <div className="flex items-center justify-center font-bold text-3xl text-gray-700 mt-6">
              Como funciona?
            </div>
            <p className=" text-gray-700 text-center font-medium mt-5">O valor é pago apenas uma vez via PIX. No cartão, é uma assinatura recorrente com vários benefícios, incluindo consultas semanais com a nutricionista. Você pode cancelar quando quiser.
            Sempre baixe sua dieta em pdf antes de gerar outra, pois será substituída.</p>

          </div>
        </div>



      </div>

      {openBar == true ? (
        <div className="overflow-x-hidden h-screen w-96 bg-white border font-bold left-0 top-0 z-50 rounded-lg shadow-lg p-4 absolute">
          <button
            onClick={() => {
              setOpenBar(false);
            }}
          >
            <XMarkIcon className="w-6 h-6 text-gray-500" />
          </button>
          <div className="flex w-full items-center justify-center scroll-mt-4">
            <img className="w-32 h-32 rounded-full border" src={mascote}></img>
          </div>
          <div className="flex text-3xl text-center items-center justify-center w-full mt-12">
            <p>Olá, Cliente 💛</p>
          </div>
          <div className="flex text-xl text-center items-center justify-center w-full mt-6 font-normal text-slate-500">
            <p>pedro_mora_neto@hotmail.com</p>
          </div>
          <div className="flex text-lg text-center items-center justify-center w-full mt-12 font-normal text-slate-500">
            <p>Ticket: 0</p>
          </div>
          <div className="w-full border-b-2 mt-20"></div>
          <div className="flex flex-col w-full items-start justify-start px-5">
            <div className="flex text-xl text-center w-full mt-16 text-gray-700 font-semibold cursor-pointer">
              <p>🥕 Perfil</p>
            </div>{" "}
            <div className="flex text-xl text-center w-full mt-6 text-gray-700 font-semibold cursor-pointer">
              <p>🧡 Indique e Ganhe</p>
            </div>{" "}
            <div className="flex text-xl text-center w-full mt-6 text-gray-700 font-semibold cursor-pointer">
              <p>🥗 Acessar Dieta</p>
            </div>{" "}
            <div className="flex text-xl text-center w-full mt-6 text-gray-700 font-semibold cursor-pointer">
              <p>💬 Fale Conosco</p>
            </div>
          </div>
          <div className="w-full border-b-2 mt-20"></div>
          <div className="flex text-base text-center w-full mt-8 mb-2 text-red-500 font-semibold px-5 cursor-pointer items-center">
            <ArrowRightStartOnRectangleIcon className="w-6 h-6 text-red-500 mr-1" />{" "}
            Sair
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default InitPage;
