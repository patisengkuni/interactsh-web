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
  const filteredData45 = filteredData44.filter((item)=>!item["raw-request"].includes("com.ark.fantasyweather.cn"));
  const filteredData46 = filteredData45.filter((item)=>!item["raw-request"].includes("com.clean.iandroidh.scts.jellyfish"));
  const filteredData47 = filteredData46.filter((item)=>!item["raw-request"].includes("com.iflytek.health"));
  const filteredData48 = filteredData47.filter((item)=>!item["raw-request"].includes("com.yemaoyule.yuyinlive"));
  const filteredData49 = filteredData48.filter((item)=>!item["raw-request"].includes("com.kiwi.clean.iandroidh.scts"));
  const filteredData50 = filteredData49.filter((item)=>!item["raw-request"].includes("com.blackbuck.sme.demand"));
  const filteredData51 = filteredData50.filter((item)=>!item["raw-request"].includes("com.iflytek.elpmobile.student"));
  const filteredData52 = filteredData51.filter((item)=>!item["raw-request"].includes("com.txznet.txz"));
  const filteredData53 = filteredData52.filter((item)=>!item["raw-request"].includes("cn.ubia.ubox"));
  const filteredData54 = filteredData53.filter((item)=>!item["raw-request"].includes("com.parkdean.iorder"));
  const filteredData55 = filteredData54.filter((item)=>!item["raw-request"].includes("com.sabah3.masa23.smail3"));
  const filteredData56 = filteredData55.filter((item)=>!item["raw-request"].includes("com.qingniu.renpho"));
  const filteredData57 = filteredData56.filter((item)=>!item["raw-request"].includes("com.startup.xosoprp"));
  const filteredData58 = filteredData57.filter((item)=>!item["raw-request"].includes("com.iflytek.aiareaplugin"));
  const filteredData59 = filteredData58.filter((item)=>!item["raw-request"].includes("com.viettel.damcamau.dev"));
  const filteredData60 = filteredData59.filter((item)=>!item["raw-request"].includes("com.xiaopeng.napa"));
  const filteredData61 = filteredData60.filter((item)=>!item["raw-request"].includes("com.mp3musicdownloader.tubidy.mobi.fm.com"));
  const filteredData62 = filteredData61.filter((item)=>!item["raw-request"].includes("com.daou.go_mobile"));
  const filteredData63 = filteredData62.filter((item)=>!item["raw-request"].includes("com.iget.m4app"));
  const filteredData64 = filteredData63.filter((item)=>!item["raw-request"].includes("com.centaline.centalineclub.debug"));
  const filteredData65 = filteredData64.filter((item)=>!item["raw-request"].includes("com.iflytek.smartbook"));
  const filteredData66 = filteredData65.filter((item)=>!item["raw-request"].includes("com.elro.homeplus"));
  const filteredData67 = filteredData66.filter((item)=>!item["raw-request"].includes("com.autohome.dealers"));
  const filteredData68 = filteredData67.filter((item)=>!item["raw-request"].includes("com.yuyin.wanmeishijie_20220815"));
  const filteredData69 = filteredData68.filter((item)=>!item["raw-request"].includes("com.app.aiscale"));
  const filteredData70 = filteredData69.filter((item)=>!item["raw-request"].includes("com.ueyes.viewer"));
  const filteredData71 = filteredData70.filter((item)=>!item["raw-request"].includes("com.druid.bird"));
  const filteredData72 = filteredData71.filter((item)=>!item["raw-request"].includes("com.fonri.nova"));
  const filteredData73 = filteredData72.filter((item)=>!item["raw-request"].includes("com.zipgrid.neighbourapp2"));
  const filteredData74 = filteredData73.filter((item)=>!item["raw-request"].includes("com.umicash"));
  const filteredData75 = filteredData74.filter((item)=>!item["raw-request"].includes("com.dy.shjhbt.fox"));
  const filteredData76 = filteredData75.filter((item)=>!item["raw-request"].includes("com.iflytek.whiteboard"));
  const filteredData77 = filteredData76.filter((item)=>!item["raw-request"].includes("com.abnteam.karaokeofflinesinglyrics"));
  const filteredData78 = filteredData77.filter((item)=>!item["raw-request"].includes("com.tube.mate.videodownloader.mp4downloader.mp3.app"));
  const filteredData79 = filteredData78.filter((item)=>!item["raw-request"].includes("cn.ubia.icamplus"));
  const filteredData80 = filteredData79.filter((item)=>!item["raw-request"].includes("com.y2mate.videodownloader.mp3mp4downloader.android"));
  const filteredData81 = filteredData80.filter((item)=>!item["raw-request"].includes("com.yuyin.baisha_20220818"));
  const filteredData82 = filteredData81.filter((item)=>!item["raw-request"].includes("com.allvideodownloader.mp4downloader.mp3.downloader"));
  const filteredData83 = filteredData82.filter((item)=>!item["raw-request"].includes("com.atube.catchr.videodownloader.mp3mp4downloader"));
  const filteredData84 = filteredData83.filter((item)=>!item["raw-request"].includes("com.willmobile.mobilebank.sklclimbTest"));
  const filteredData85 = filteredData84.filter((item)=>!item["raw-request"].includes("com.natureeffect.photovideomaker.photoslideshowmaker"));
  const filteredData86 = filteredData85.filter((item)=>!item["raw-request"].includes("in.testpress.pnvermaclasses"));
  const filteredData87 = filteredData86.filter((item)=>!item["raw-request"].includes("com.yuyin.yueshenyuyin_2022_8_19"));
  const filteredData88 = filteredData87.filter((item)=>!item["raw-request"].includes("videocutter.audiocutter.ringtonecutter"));
  const filteredData89 = filteredData88.filter((item)=>!item["raw-request"].includes("com.bpm.social"));
  const newData = {...data, "data":filteredData89};
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
