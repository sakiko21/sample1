import './App.css';
import { createContext, useState } from 'react';
import UserList from './components/UserList';
export const LanguageContext = createContext();//クリエイトコンテキストを作り、他のコンポートでも読み込めるようエクスポートする

export default function App() {
  const [language, setLanguage] = useState("ja_JP");
  return (
    <LanguageContext.Provider value={language}> 
     {/*クリエイトコンテクストで作ったものみプロバイダをあたえ、バリュー値を設定。バリュー値設定したものを、配下のコンポーネントで使える*/}
      <div className="App">
        {/*コンテキストを切り替えるセレクト*/}
        <label>言語の選択：</label>
        <select onChange={(e) => setLanguage(e.target.value)}>
          <option value="ja_JP"  selected={language === "ja_JP" ? true : false}>日本語</option>
          <option value="en_US" selected={language === "en_US" ? true : false}>英語</option>
        </select>
        <UserList />
      </div>
    </LanguageContext.Provider>
  );
}

