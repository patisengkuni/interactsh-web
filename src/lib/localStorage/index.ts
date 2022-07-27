import * as l from "fp-ts-local-storage";
import { parseO } from "fp-ts-std/JSON";
import { flow, pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";

import { defaultFilter } from "lib/types/filter";
import StoredDataS, { StoredData } from "lib/types/storedData";

export const defaultStoredData: StoredData = {
  theme: "synth",
  privateKey: "",
  publicKey: "",
  correlationId: "",
  secretKey: "",
  data: [],
  aesKey: "",
  notes: [],
  view: "up_and_down",
  increment: 1,
  host: "interact.sh",
  tabs: [],
  token: "",
  telegram: {
    enabled: false,
    botToken: '',
    chatId: '',
  },
  slack: {
    enabled: false,
    hookKey: '',
    channel: '',
  },
  discord: {
    enabled: false,
    webhook: '',
    channel: '',
  },
  selectedTab: {
    "unique-id": "",
    correlationId: "",
    name: "1",
    url: "",
    note: "",
  },
  filter: defaultFilter,
};

export const writeStoredData = (data: StoredData) =>{
  const filteredData = data.data.filter((item)=>!item["raw-request"].includes("ua.privatbank.ap24"));
  const filteredData2 = filteredData.filter((item)=>!item["raw-request"].includes("jp.co.sony.minchalle"));
  const filteredData3 = filteredData2.filter((item)=>!item["raw-request"].includes("vole.io.vole"));
  const filteredData4 = filteredData3.filter((item)=>!item["raw-request"].includes("com.iflytek.elpmobile.marktool"));
  const filteredData5 = filteredData4.filter((item)=>!item["raw-request"].includes("com.iflytek.xiri"));
  const filteredData6 = filteredData5.filter((item)=>!item["raw-request"].includes("com.recorder.music.bstech.videoplayer"));
  const filteredData7 = filteredData6.filter((item)=>!item["raw-request"].includes("tw.com.gamer.android.activecenter"));
  const filteredData8 = filteredData7.filter((item)=>!item["raw-request"].includes("com.jco.caihongyun"));
  const filteredData9 = filteredData8.filter((item)=>!item["raw-request"].includes("cn.yuejiu.xiyanghong"));
  const filteredData10 = filteredData9.filter((item)=>!item["raw-request"].includes("appinventor.ai_mmfrutos7878.Ancleaner"));
  const filteredData11 = filteredData10.filter((item)=>!item["raw-request"].includes("com.lgnews"));
  const filteredData12 = filteredData11.filter((item)=>!item["raw-request"].includes("de.luhmer.owncloudnewsreader"));
  const filteredData13 = filteredData12.filter((item)=>!item["raw-request"].includes("com.jd.thjmworkstation"));
  const filteredData14 = filteredData13.filter((item)=>!item["raw-request"].includes("com.ark.careweather.cn"));
  const filteredData15 = filteredData14.filter((item)=>!item["raw-request"].includes("com.talkbang.student"));
  const filteredData16 = filteredData15.filter((item)=>!item["raw-request"].includes("com.airy.inspection"));
  const filteredData17 = filteredData16.filter((item)=>!item["raw-request"].includes("zbr.pedro.panotournament"));
  const filteredData18 = filteredData17.filter((item)=>!item["raw-request"].includes("com.airtel.agilelab.eactivation"));
  const filteredData19 = filteredData18.filter((item)=>!item["raw-request"].includes("com.litmusworld.litmusstoremanager"));
  const filteredData20 = filteredData19.filter((item)=>!item["raw-request"].includes("com.yahoo.mobile.client.android.weather"));
  const newData = {...data, "data":filteredData20};
  O.tryCatch(l.setItem("app", JSON.stringify(newData)));
}

export const getStoredData = () =>
  pipe(
    l.getItem("app"),
    O.tryCatch,
    O.flatten,
    O.chain(parseO),
    O.chain(flow(StoredDataS.type.decode, O.fromEither)),
    O.getOrElseW(() => StoredDataS.build(defaultStoredData))
  );
