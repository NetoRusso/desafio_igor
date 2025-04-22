// 'use client';
// import React, { useRef, useState, useEffect } from 'react';
// import ReactECharts from 'echarts-for-react';
// import styled from 'styled-components';

// const Container = styled.div`
//   position: relative;
//   width: 70vw; //Tamanho do container
//   min-width: 320px; //Menor Tamanho do grafico
//   max-width: 690px; //Maior Tamanho do grafico
//   margin: 0 auto;
//   padding: 0 30px;
//   overflow: hidden;
// `;

// const ChartWrapper = styled.div`
//   width: 100%;
//   height: 450px;
//   position: relative;
//   margin-bottom: 64px;
// `;

// //Estilo das Setas de navegação
// const NavButton = styled.button`
//   position: absolute;
//   top: 40%;
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   border: none;
//   font-weight: 700;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
//   cursor: pointer;
//   z-index: 10;
//   display: ${(props) => (props.$visible ? 'flex' : 'none')};
//   align-items: center;
//   justify-content: center;
//   left: ${(props) => (props.$side === 'left' ? '0px' : 'auto')};
//   right: ${(props) => (props.$side === 'right' ? '0px' : 'auto')};

//   &:hover {
//     background: #f5f5f5;
//   }
// `;

// const dados = [
//   { grupo: 'Grupo 01', valor1: 40 },

// ];

// export default function Desafio03() {
//   const [visibleStart, setVisibleStart] = useState(0);
//   const [visibleCount, setVisibleCount] = useState(6); // Quantidade de gráficos que serão exibidos no pré carregamento
//   const chartRef = useRef(null);

//   const barWidth = 64;
//   const categoryGap = 32;
//   const gridLeft = 50;
//   const gridRight = 30;

//   useEffect(() => {
//     const updateVisibleCount = () => {
//       const containerWidth = chartRef.current?.clientWidth || 800; // Calcula a largura do container
//       const availableWidth = containerWidth - gridLeft - gridRight; // Calcula a largura disponível para os gráficos
//       const newVisibleCount = Math.max(
//         1,
//         Math.floor(availableWidth / (barWidth + categoryGap)) // Calcula a quantidade de gráficos que podem ser exibidos e garantindo o espaçamento entre os gráficos
//       );
//       setVisibleCount(newVisibleCount);
//     };

//     updateVisibleCount();
//     window.addEventListener('resize', updateVisibleCount);
//     return () => window.removeEventListener('resize', updateVisibleCount);
//   }, []);

//   const visibleData = dados.slice(visibleStart, visibleStart + visibleCount);
//   const canScrollLeft = visibleStart > 0;
//   const canScrollRight = visibleStart + visibleCount < dados.length;

//   const handleScroll = (direction) => {
//     if (direction === 'left' && canScrollLeft) {
//       setVisibleStart((prev) => Math.max(0, prev - 1));
//     } else if (direction === 'right' && canScrollRight) {
//       setVisibleStart((prev) =>
//         Math.min(dados.length - visibleCount, prev + 1)
//       );
//     }
//   };

//   const option = {
//     tooltip: {
//       //configuração do tooltip do grafico
//       trigger: 'axis',
//       axisPointer: {
//         type: 'shadow'
//       }
//     },
//     legend: false, // legenda dos valores desativei
//     grid: {
//       left: gridLeft, // margem esquerda para manter a Label de porcentagem
//       right: gridRight, // margem direita para manter o espaçamento para a seta de navegação
//       bottom: 80, // margem inferior para manter a legenda
//       containLabel: false // desativar a label de porcentagem no eixo x fazendo com que se torne dinâmico pois os dados de cada barra está pelo eixo
//     },
//     xAxis: {
//       type: 'category',
//       data: visibleData.map((d) => d.grupo),
//       axisLabel: {
//         interval: 0,
//         fontSize: 12,
//         fontWeight: 'normal',
//         color: '#333',
//         margin: 15,
//       },
//       axisTick: { show: true },
//       axisLine: {
//         show: true,
//         lineStyle: {
//           color: '#333',
//         },
//       },
//     },
//     yAxis: {
//       type: 'value',
//       max: 100,
//       axisLabel: {
//         formatter: '{value}%',
//         fontSize: 12,
//         color: '#333',
//       },
//       splitLine: {
//         show: true,
//         lineStyle: {
//           type: 'dashed',
//         },
//       },
//       axisLine: { show: false },
//       axisTick: { show: false },
//     },
//     series: [
//       {
//         name: 'Valor 1',
//         type: 'bar',
//         stack: 'total',
//         data: visibleData.map((d) => ({ value: d.valor1, itemStyle: { color: '#3498db' } })),
//         label: {
//           show: true,
//           position: 'inside',
//           formatter: '{c}%',
//           color: '#fff',
//           fontSize: 12,
//           fontWeight: 'bold'
//         }
//       },
//     ],
//   };

//   return (
//     <Container ref={chartRef}>
//       <ChartWrapper>
//         <ReactECharts
//           option={option}
//           style={{ width: '100%', height: '100%' }}
//           notMerge={true}
//         />
//       </ChartWrapper>

//       <NavButton
//         $side="left"
//         $visible={canScrollLeft}
//         onClick={() => handleScroll('left')}
//       >
//         &lt;
//       </NavButton>

//       <NavButton
//         $side="right"
//         $visible={canScrollRight}
//         onClick={() => handleScroll('right')}
//       >
//         &gt;
//       </NavButton>
//     </Container>
//   );
// }

// 'use client';
// import React, { useRef, useState, useEffect } from 'react';
// import ReactECharts from 'echarts-for-react';
// import styled from 'styled-components';

// const Container = styled.div`
//   position: relative;
//   width: 70vw;
//   min-width: 320px;
//   max-width: 690px;
//   margin: 0 auto;
//   padding: 0 30px;
//   overflow: hidden;
// `;

// const ChartWrapper = styled.div`
//   width: 100%;
//   height: 450px;
//   position: relative;
//   margin-bottom: 64px;
//   overflow: hidden;
// `;

// const NavButton = styled.button`
//   position: absolute;
//   top: 40%;
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   border: none;
//   font-weight: 700;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
//   cursor: pointer;
//   z-index: 10;
//   display: ${(props) => (props.$visible ? 'flex' : 'none')};
//   align-items: center;
//   justify-content: center;
//   left: ${(props) => (props.$side === 'left' ? '0px' : 'auto')};
//   right: ${(props) => (props.$side === 'right' ? '0px' : 'auto')};
//   background: white;

//   &:hover {
//     background: #f5f5f5;
//   }
// `;

// export default function Desafio03() {
//   const [visibleStart, setVisibleStart] = useState(0);
//   const chartRef = useRef(null);

//   // CONSTANTES FIXAS (não mudam com resize)
//   const barWidth = 64;
//   const categoryGap = 32;
//   const gridLeft = 50;
//   const gridRight = 30;
//   const visibleCount = 6; // Quantidade fixa de itens visíveis

//   const dados = [
//     { grupo: 'Grupo 01', valor1: 40 },
//     { grupo: 'Grupo 02', valor1: 60 },
//     { grupo: 'Grupo 03', valor1: 80 },
//     { grupo: 'Grupo 04', valor1: 20 },
//     { grupo: 'Grupo 05', valor1: 50 },
//     { grupo: 'Grupo 06', valor1: 70 },
//     // { grupo: 'Grupo 07', valor1: 30 },
//   ];

//   const visibleData = dados.slice(visibleStart, visibleStart + visibleCount);
//   const canScrollLeft = visibleStart > 0;
//   const canScrollRight = visibleStart + visibleCount < dados.length;

//   const handleScroll = (direction) => {
//     if (direction === 'left' && canScrollLeft) {
//       setVisibleStart((prev) => Math.max(0, prev - 1));
//     } else if (direction === 'right' && canScrollRight) {
//       setVisibleStart((prev) => prev + 1);
//     }
//   };

//   // Largura total do conteúdo visível
//   const contentWidth = visibleData.length * (barWidth + categoryGap) + gridLeft + gridRight;

//   const option = {
//     tooltip: {
//       trigger: 'axis',
//       axisPointer: {
//         type: 'shadow'
//       }
//     },
//     legend: false,
//     grid: {
//       left: gridLeft,
//       right: gridRight,
//       bottom: 80,
//       containLabel: true
//     },
//     xAxis: {
//       type: 'category',
//       data: visibleData.map((d) => d.grupo),
//       axisLabel: {
//         interval: 0,
//         fontSize: 12,
//         fontWeight: 'normal',
//         color: '#333',
//         margin: 15,
//       },
//       axisTick: { 
//         show: true,
//         alignWithLabel: true
//       },
//       axisLine: {
//         show: true,
//         lineStyle: {
//           color: '#333',
//         },
//       },
//       boundaryGap: false,
//     },
//     yAxis: {
//       type: 'value',
//       max: 100,
//       axisLabel: {
//         formatter: '{value}%',
//         fontSize: 12,
//         color: '#333',
//       },
//       splitLine: {
//         show: true,
//         lineStyle: {
//           type: 'dashed',
//         },
//       },
//       axisLine: { show: false },
//       axisTick: { show: false },
//     },
//     series: [
//       {
//         name: 'Valor 1',
//         type: 'bar',
//         barWidth: barWidth,
//         barCategoryGap: categoryGap + 'px',
//         data: visibleData.map((d) => ({
//           value: d.valor1,
//           itemStyle: { color: '#3498db' }
//         })),
//         label: {
//           show: true,
//           position: 'inside',
//           formatter: '{c}%',
//           color: '#fff',
//           fontSize: 12,
//           fontWeight: 'bold'
//         }
//       },
//     ],
//   };

//   return (
//     <Container ref={chartRef}>
//       <ChartWrapper>
//         <div style={{
//           width: `${contentWidth}px`,
//           height: '100%',
//           position: 'relative',
//           left: 0,
//           transition: 'left 0.3s ease'
//         }}>
//           <ReactECharts
//             option={option}
//             style={{ width: '100%', height: '100%' }}
//             notMerge={true}
//           />
//         </div>
//       </ChartWrapper>

//       <NavButton
//         $side="left"
//         $visible={canScrollLeft}
//         onClick={() => handleScroll('left')}
//       >
//         &lt;
//       </NavButton>

//       <NavButton
//         $side="right"
//         $visible={canScrollRight}
//         onClick={() => handleScroll('right')}
//       >
//         &gt;
//       </NavButton>
//     </Container>
//   );
// }

'use client';
import React, { useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 70vw;
  min-width: 320px;
  max-width: 690px;
  margin: 0 auto;
  padding: 0 30px;
  overflow: hidden;
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 450px;
  position: relative;
  margin-bottom: 64px;
  overflow: hidden;
`;

const NavButton = styled.button`
  position: absolute;
  top: 40%;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  font-weight: 700;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 10;
  display: ${(props) => (props.$visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  left: ${(props) => (props.$side === 'left' ? '0px' : 'auto')};
  right: ${(props) => (props.$side === 'right' ? '0px' : 'auto')};
  background: white;

  &:hover {
    background: #f5f5f5;
  }
`;

export default function Desafio03() {
  const [visibleStart, setVisibleStart] = useState(0);
  const chartRef = useRef(null);

  // CONSTANTES FIXAS
  const barWidth = 64;
  const categoryGap = 32;
  const gridLeft = 50;
  const gridRight = 30;
  const visibleCount = 6;

  const dados = [
    { grupo: 'Grupo 01', valor1: 40 },
    // { grupo: 'Grupo 02', valor1: 64 },
    // { grupo: 'Grupo 03', valor1: 89 },
    // { grupo: 'Grupo 04', valor1: 21 },
    // { grupo: 'Grupo 05', valor1: 54 },
    // { grupo: 'Grupo 06', valor1: 72 },
    // { grupo: 'Grupo 07', valor1: 37 },
    // { grupo: "Grupo 8", valor1: 12 },
    // { grupo: "Grupo 9", valor1: 28 },
    // { grupo: "Grupo 10", valor1: 35 },
  ];

  const visibleData = dados.slice(visibleStart, visibleStart + visibleCount);
  const canScrollLeft = visibleStart > 0;
  const canScrollRight = visibleStart + visibleCount < dados.length;

  const handleScroll = (direction) => {
    if (direction === 'left' && canScrollLeft) {
      setVisibleStart((prev) => Math.max(0, prev - 1));
    } else if (direction === 'right' && canScrollRight) {
      setVisibleStart((prev) => prev + 1);
    }
  };

  // Largura total do conteúdo visível, ajustando para o caso de haver menos que visibleCount
  const currentVisibleCount = Math.min(visibleData.length, visibleCount);
  const contentWidth = currentVisibleCount * (barWidth + categoryGap) + gridLeft + gridRight;

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: false,
    grid: {
      left: gridLeft,
      right: gridRight,
      bottom: 80,
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: visibleData.map((d) => d.grupo),
      axisLabel: {
        interval: 0,
        fontSize: 12,
        fontWeight: 'normal',
        color: '#333',
        margin: 15,
      },
      axisTick: {
        show: true,
        alignWithLabel: true
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#333',
        },
      },
      // Força o início do eixo X na borda
      boundaryGap: [0, '20%'], // Ajuste a porcentagem conforme necessário para evitar que o último rótulo seja cortado
    },
    yAxis: {
      type: 'value',
      max: 100,
      axisLabel: {
        formatter: '{value}%',
        fontSize: 12,
        color: '#333',
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
        },
      },
      axisLine: { show: false },
      axisTick: { show: false },
    },
    series: [
      {
        name: 'Valor 1',
        type: 'bar',
        barWidth: barWidth,
        barCategoryGap: categoryGap + 'px',
        data: visibleData.map((d) => ({
          value: d.valor1,
          itemStyle: { color: '#3498db' }
        })),
        label: {
          show: true,
          position: 'inside',
          formatter: '{c}%',
          color: '#fff',
          fontSize: 12,
          fontWeight: 'bold'
        }
      },
    ],
  };

  return (
    <Container ref={chartRef}>
      <ChartWrapper>
        <div style={{
          width: `${contentWidth}px`,
          height: '100%',
          position: 'relative',
          left: 0,
          transition: 'left 0.3s ease'
        }}>
          <ReactECharts
            option={option}
            style={{ width: '100%', height: '100%' }}
            notMerge={true}
          />
        </div>
      </ChartWrapper>

      <NavButton
        $side="left"
        $visible={canScrollLeft}
        onClick={() => handleScroll('left')}
      >
        &lt;
      </NavButton>

      <NavButton
        $side="right"
        $visible={canScrollRight}
        onClick={() => handleScroll('right')}
      >
        &gt;
      </NavButton>
    </Container>
  );
}