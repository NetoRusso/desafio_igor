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
`;

const BoxGrafico = styled.div`
  width: 700px;
  height: 750px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoxDados = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ItemDado = styled.div`
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
      radius: "90%",
      center: ["50%", "50%"],
      padAngle: 2,
      startAngle: 200,
      endAngle: 560,
      flushSync: true,
      avoidLabelOverlap: true,
      // clockWise: false,

      data: dados
      .map((item, index) => ({
        value: item.porcentagem,
        radius: ['0%', `${30 + (item.porcentagem * 0.01 + 0.5) * index}%`],
        z: item.porcentagem,
        itemStyle: {
          color: item.cor,
          borderWidth: item.porcentagem === 50 ? 70 : item.porcentagem === 40 ? 30 : 20,
          borderCap: "square",
          borderColor: item.porcentagem === 10 ? item.cor : "white",
        },
      }))
      .sort((a, b) => b.value - a.value),
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
            style={{ width: "100%", height: "auto", minHeight: "500px" }}
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
