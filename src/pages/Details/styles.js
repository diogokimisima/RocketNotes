import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 100vh;
   
   
   display: grid;
   grid-template-rows: 105px auto;
   grid-template-areas: 
   "header"
   "content";

   > main {
      grid-area: content;
      overflow-y: scroll;
      padding: 64px 0;
   }

   @media(max-width: 650px){
    
      > main {
      margin:0 40px;
      margin-top: -40px
   }
  }
`;

export const Links = styled.ul`
   list-style: none;
   display: inline-block;
   width: 530px; 
   white-space: nowrap;
   overflow: hidden; 
   text-overflow: ellipsis; 
   vertical-align: middle; 

   > li {
      margin-top: 12px;

      a {
         color: ${({ theme }) => theme.COLORS.WHITE};
      }
   } 
 `;

export const Content = styled.div`
   max-width: 550px;
   margin: 0 auto;

   display: flex;
   flex-direction: column;

   > button:first-child {
      align-self: end;
   }

   > h1 {
      font-size: 36px;
      font-weight: 500;
      padding-top: 54px;
   }

   > p {
      font-size: 16px;
      margin-top: 16px;
      text-align: justify;
   }

      @media(max-width: 650px){
         > h1 {
            font-size: 30px
         }

         > p {
            font-size: 14px;
   }
  }
 `





