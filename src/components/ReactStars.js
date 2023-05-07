import React, {useState} from "react";
import { FaStar } from "react-icons/fa";

export default function ReactStars({totalStars = 5}){
    const [selectedStars, setSelectedStars] = useState(totalStars);
    console.log(selectedStars);
    const Star = ({selected = false, onSelect = f => f}) => (<FaStar color = {selected ? "red":"gray"} onClick={() => onSelect()}/>)
    return[...Array(totalStars)].map((_, i) => <Star key={i} selected={i < selectedStars} onSelect={()=> setSelectedStars(i + 1)}/>);
    //totalStarsの数だけStarコンポーネントをレンダリングしています。
    //分割代入を使用して、星アイコンの配列を作成し、map関数を使って各アイコンに対応するStarコンポーネントをレンダリングしています。
    //key属性には、一意のインデックスiを設定し、selected属性はiがselectedStarsより小さい場合にtrueに設定されます。
    //onSelect属性には、星アイコンがクリックされたときに、setSelectedStarsを使ってselectedStars状態を更新する関数が設定されています。
    //(_, i) のうち、最初の引数はアンダースコア _ です。これは、この引数が使われないことを示す慣習です
    //map()関数の最初の引数は、現在処理中の配列要素ですが、この場合は要素の値は重要ではなく、要素のインデックスだけが必要です。
    //2番目の引数 i は、配列のインデックスを表しています。
    //このインデックスは、Starコンポーネントのkey属性に設定され、選択された星の判断にも使われています。
    //(_, i) を使用して、totalStars の数だけ Star コンポーネントを生成し、適切なプロパティを設定しています。
    //要約すると、このコードは totalStars の数だけ星を表示し、その星が選択されているかどうかを判断し、選択時の動作を設定しています。
};

