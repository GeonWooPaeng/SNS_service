import './index.scss'

const App = ({ Component, pageProps }) => <Component {...pageProps} />

App.getInitialProps = async ({ ctx, Component }) => {
    //ctx: context
    //각 Component별로 getInitalProps가 정의가 되어 있을때 ctx를 넘겨서 그것에 return 받는 pageProps를 넘겨준다음에
    //이것으로 각각의 Component를 구성해준다
    const pageProps = await Component.getInitialProps?.(ctx)
    return { pageProps }
}

export default App

