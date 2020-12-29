import Cookies from 'universal-cookie'

export default ({ reg, route, redirect }) => {
  console.log(route.path)
  // '/'パスの場合はなにもしない
  if (['/'].includes(route.path)) {
    return;
  }
  // それ以外の場合は認証確認を行いリダイレクトする
  const cookies = reg ? new Cookies(req.headers.cookie) : new Cookies()
  // クッキー情報からcredentialを取得する
  const credential = cookies.get('credential')
  
  if (credential && route.path === '/login') {
    return redirect('/')
  }

  if (!credential && route.path === '/authed-route') {
    return redirect('/login')
  } 
}