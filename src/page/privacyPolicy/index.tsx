import React from "react";
import { useHistory } from "react-router-dom";

const PrivacyPolicy = () => {
  const history = useHistory();
  return (
    <div className="flex flex-col items-center pb-20">
      <span className="text-3xl text-green-700 font-medium pt-24">
        プライバシーポリシー
      </span>
      <div className="pt-10  w-4/5 font-thin">
        <div className="text-lg text-green-600 ">
          当サイトに掲載される広告について
        </div>
        <br />
        <div>
          当サイトでは、第三者配信の広告サービス（
          <a className="underline" href="http://www.google.com/adsense/start/">
            Googleアドセンス
          </a>
          )を利用しています。
        </div>
        <br />
        <div>
          このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報『Cookie』(氏名、住所、メール
          アドレス、電話番号は含まれません) を使用することがあります。
        </div>
        <br />
        <div>
          またGoogleアドセンスに関して、このプロセスの詳細やこのような情報が広告配信事業者に使用されないようにする方法については、
          <a
            className="underline"
            href="http://www.google.co.jp/policies/technologies/ads/"
          >
            こちら
          </a>
          をクリックしてください。
        </div>
        <br />
        <div className="text-lg text-green-600 ">
          当サイトが使用しているアクセス解析ツールについて
        </div>
        <br />
        <div>
          当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
          このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
          <br />
          <br />
          このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
          この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
          <br />
          <br />
          この規約に関して、詳しくは
          <a
            className="underline"
            href="http://www.google.com/analytics/terms/jp.html"
          >
            こちら
          </a>
          、または
          <a
            className="underline"
            href="https://www.google.com/intl/ja/policies/privacy/partners/"
          >
            こちら
          </a>
          をクリックしてください。
        </div>
      </div>
      <button className="btn mt-8" onClick={() => history.push("/")}>
        TOPへ戻る
      </button>
    </div>
  );
};

export default PrivacyPolicy;
