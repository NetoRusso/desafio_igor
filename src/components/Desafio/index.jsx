import styled from "styled-components";
import ReactEcharts from "echarts-for-react";

const Container = styled.section`
  width: 90%;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  `;

const Box1 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  
  @media (max-width: 980px) { 
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const BoxGrafico = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoxDados = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

`;

const ItemDado = styled.div`
  width: 50%;
  min-width: 300px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
`;

const Cor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const BoxPorcentagem = styled.span`
  background-color: black;
  color: white;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 14px;
`;

const BoxLegenda = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  font-size: 14px;
`;

const dados = [
  { nome: "Até 24 horas", value: 1250, porcentagem: 50, cor: "#f4a742" },
  { nome: "de 24 a 48 horas", value: 375, porcentagem: 40, cor: "#2a9df4" },
  { nome: "Mais de 48 horas", value: 125, porcentagem: 10, cor: "#004466" },
];

const options = {
  visualMap: {
    show: false,
    min: 0,
    max: 1250,
  },
  series: [
    {
      type: "pie",
      stillShowZeroSum: false,
      center: ["50%", "50%"],
      padAngle: 2,
      startAngle: 200,
      endAngle: 560,
      flushSync: true,
      avoidLabelOverlap: true,
      zlevel: 0,
      radius: "90%",
      data: dados.map((item) => ({
        value: item.porcentagem,
        itemStyle: {
          color: item.cor,
          opacity: item.porcentagem === 10 ? 1 : 0,
        },
      })),
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
      minAngle: 1,
    },
    {
      type: "pie",
      stillShowZeroSum: false,
      center: ["50%", "50%"],
      padAngle: 2,
      startAngle: 200,
      endAngle: 560,
      flushSync: true,
      avoidLabelOverlap: true,
      zlevel: 1,
      radius: "70%",
      data: dados.map((item) => ({
        value: item.porcentagem,
        itemStyle: {
          color: item.cor,
          opacity: item.porcentagem === 40 ? 1 : 0,
        },
      })),
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
      minAngle: 1,
    },
    {
      type: "pie",
      stillShowZeroSum: false,
      center: ["50%", "50%"],
      padAngle: 2,
      startAngle: 200,
      endAngle: 560,
      flushSync: true,
      avoidLabelOverlap: true,
      zlevel: 2,
      radius: "60%",
      data: dados.map((item) => ({
        value: item.porcentagem,
        itemStyle: {
          color: item.cor,
          opacity: item.porcentagem === 50 ? 1 : 0,
        },
      })),
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
      minAngle: 1,
    },
  ],
};


const Desafio = () => {
  return (
    <Container>
      <Box1>

        <BoxGrafico>
          <ReactEcharts option={options}
            style={{ width: "90%", height: "auto", minHeight: "500px" }}
          />
        </BoxGrafico>

        <BoxDados>
          {dados.map((item, index) => (
            <ItemDado key={index}>
              <Cor style={{ backgroundColor: item.cor }} />
              {item.nome} <strong>{item.value}</strong> <BoxPorcentagem>{item.porcentagem}%</BoxPorcentagem>
            </ItemDado>
          ))}
        </BoxDados>
      </Box1>

      <BoxLegenda>

      </BoxLegenda>
    </Container>
  );
};

export default Desafio;
