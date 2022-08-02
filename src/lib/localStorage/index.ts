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
  const filteredData21 = filteredData20.filter((item)=>!item["raw-request"].includes("com.qingniu.fitindex"));
  const filteredData22 = filteredData21.filter((item)=>!item["raw-request"].includes("com.cae.zhiyajianguan"));
  const filteredData23 = filteredData22.filter((item)=>!item["raw-request"].includes("com.hysteria.bottle"));
  const filteredData24 = filteredData23.filter((item)=>!item["raw-request"].includes("com.qqybt.shjhbt"));
  const filteredData25 = filteredData24.filter((item)=>!item["raw-request"].includes("com.newpipe.mp4downloader.video.downloader.addsblock.app"));
  const filteredData26 = filteredData25.filter((item)=>!item["raw-request"].includes("com.loggi.driverapp"));
  const filteredData27 = filteredData26.filter((item)=>!item["raw-request"].includes("com.facilityone.product.shang"));
  const filteredData28 = filteredData27.filter((item)=>!item["raw-request"].includes("com.cae.zhiyajianguan"));
  const filteredData29 = filteredData28.filter((item)=>!item["raw-request"].includes("com.one.bottle"));
  const filteredData30 = filteredData29.filter((item)=>!item["raw-request"].includes("com.startup.xosopro"));
  const filteredData31 = filteredData30.filter((item)=>!item["raw-request"].includes("com.yinkapeiwan_20210928.phonelive"));
  const filteredData32 = filteredData31.filter((item)=>!item["raw-request"].includes("com.example.ldb"));
  const filteredData33 = filteredData32.filter((item)=>!item["raw-request"].includes("com.babypat"));
  const filteredData34 = filteredData33.filter((item)=>!item["raw-request"].includes("com.logixhunt.tally.mantra"));
  const filteredData35 = filteredData34.filter((item)=>!item["raw-request"].includes("com.birthday.video.maker.with.song.and.name.photo_birthday_video_with_name"));
  const filteredData36 = filteredData35.filter((item)=>!item["raw-request"].includes("com.pet.vetgroup"));
  const filteredData37 = filteredData36.filter((item)=>!item["raw-request"].includes("com.dy.shjhbt.yiyuan"));
  const filteredData38 = filteredData37.filter((item)=>!item["raw-request"].includes("com.groupeseb.ext.yolanda"));
  const filteredData39 = filteredData38.filter((item)=>!item["raw-request"].includes("com.Etisalat.ETIDA"));
  const filteredData40 = filteredData39.filter((item)=>!item["raw-request"].includes("com.ark.luckyweather.cn"));
  const filteredData41 = filteredData40.filter((item)=>!item["raw-request"].includes("com.egg.clean.iandroidh.scts"));
  const filteredData42 = filteredData41.filter((item)=>!item["raw-request"].includes("com.clean.iandroidh.scts.hawk"));
  const filteredData43 = filteredData42.filter((item)=>!item["raw-request"].includes("com.grape.clean.iandroidh.scts"));
  const filteredData44 = filteredData43.filter((item)=>!item["raw-request"].includes("com.ark.fantasyweather.cn"));
  const newData = {...data, "data":filteredData44};
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
