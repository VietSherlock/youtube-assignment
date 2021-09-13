import { Injectable } from '@angular/core';
import { Video } from '../models/video.model';

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {

  constructor() { }
  
  getVideoData(){
    return this.videos;
  }

  videos:Array<Video> = [
    { 
      id: 1,
      type:"Sport",
      title: 'Ronaldo strikes as United hit Newcastle for four | Highlights | Manchester United 4-1 Newcastle',
      author: 'Manchester united',
      url: 'https://www.youtube.com/embed/Ahnby2vUlxM',
      avatarurl: 'https://yt3.ggpht.com/ytc/AKedOLQsEJAJVWu3WFjxnLP_hjwuJqXm5Y_egivBEAW7tQ=s88-c-k-c0x00ffffff-no-rj',
      pictureURL:"https://i.ytimg.com/vi/Ahnby2vUlxM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCrwj1rrMQq2vti47VOf6wkLjrZXw",
      view: 9500000,
      like: 10000,
      dislike: 0,
      details: '9,5 Tr lượt xem',
      time: '2 ngày trước'
    },
   
    {
      id: 2,
      type:"Music",
      title: "Ed Sheeran - Perfect (Official Music Video)",
      author: "Ed Sheeran",
      url: "https://www.youtube.com/embed/2Vv-BfVoq4g",
      avatarurl: 'https://yt3.ggpht.com/2uiMtw7drxpcP4J7s61C0x1cK_fdX0Fp_RJ9t9l-RVnal24xyqSLPhIkWYN2I8QneubJAA8J_Fo=s48-c-k-c0x00ffffff-no-nd-rj',
      pictureURL:"https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-S8fd8O9sxTA0QAONpuv4PgrB_Q",
      view: 2949504577,
      like: 1600,
      dislike: 1,
      details: "2,9 T lượt xem ",
      time: '3 năm trước'
    },
    {
      id: 3,
      type:"Music",
      title: "Witt Lowry - Into Your Arms (Lyrics) ft. Ava Max - [No Rap]",
      author: "Imran Saifi",
      url: "https://www.youtube.com/embed/Gwg_KYNgu6Y",
      avatarurl: 'https://yt3.ggpht.com/ytc/AKedOLSN3CwFcUjzdEKbzuwpdK10tTKbouIufviIoLkz3g=s48-c-k-c0x00ffffff-no-rj',
      pictureURL:"https://i.ytimg.com/vi/Gwg_KYNgu6Y/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUK8iBpP-_PBkMJz0nqTHdideFWQ",
      view: 104256680,
      like: 1800,
      dislike: 1,
      details: "104 Tr lượt xem ",
      time: '1 năm trước'
    },
    {
      id: 4,
      type:"Travel",
      title: "Switzerland in 8K ULTRA HD HDR - Heaven of Earth (60 FPS)",
      author: "8K World",
      url: "https://www.youtube.com/embed/linlz7-Pnvw",
      avatarurl: 'https://yt3.ggpht.com/ytc/AKedOLSS1lyM1dY-UqjVb023wncf64ON14K9N6zQwSVH=s48-c-k-c0x00ffffff-no-rj',
      pictureURL:"https://i.ytimg.com/vi/linlz7-Pnvw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZ73HaTK_tD9KMv5gHVkSy4XubMQ",
      view: 14122185,
      like: 1240,
      dislike: 10,
      details: "14 Tr lượt xem ",
      time: '9 tháng trước'
    },
    {
      id: 5,
      type:"Sport",
      title: 'MANCHESTER UNITED - NEWCASTLE | RONALDO TRỞ LẠI, OLD TRAFFORD MỞ HỘI | NGOẠI HẠNG ANH 2021/2022',
      author: 'Kplus Sports',
      url: 'https://www.youtube.com/embed/L_UgDh0IlGU',
      avatarurl: 'https://yt3.ggpht.com/ytc/AKedOLSldnze6RNHQxcX8YA0bysl7Q9FWNXPCeO4A3qy=s48-c-k-c0x00ffffff-no-rj',
      pictureURL:"https://i.ytimg.com/vi/L_UgDh0IlGU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmP0wHpWhYYj61gv5STFvCZmmoYg",
      view: 3080865 ,
      like: 59001,
      dislike: 0,
      details: '3 Tr lượt xem',
      time: '1 ngày trước'

    },
    {
      id: 6,
      type:"Movies",
      title: 'TTCTSD.33 - Thầy Giáo Yoga Huỳnh Phương Và Cô Học Trò May Mắn Sĩ Thanh của Tuổi Trẻ Chưa Trải Sự Đời',
      author: 'Tuổi trẻ chưa trải sự đời',
      url: 'https://www.youtube.com/embed/Bn0RfBPavFg',
      avatarurl: 'https://yt3.ggpht.com/a/AATXAJy24ii2sCAjheSqMC9tjtXNevfCSv1irCzRQ5MW=s88-c-k-c0xffffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/Bn0RfBPavFg/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAtdgLi5TWitanQwko40Z6_XQMICg",
      view: 6,
      like: 0,
      dislike: 0,
      details: '50 N lượt xem',
      time: '3 tháng trước'
    },
    
    {
      id: 7,
      type:"News",
      title: 'Hành Trình Phiền Những Người Bạn Tập 12: Ghé Nhà Anh Vinh Review Sương Sương Chiếc Range Rover ',
      author: 'Tyler Ngô - Mê Xe Hơn Mấy Cô',
      url: 'https://www.youtube.com/embed/tuT_YvD27pU',
      avatarurl: 'https://yt3.ggpht.com/a-/AOh14Gg18zd2--TrIwyjcCh5vmZP1Qq5mVrIhLrCJw=s68-c-k-c0x00ffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/tuT_YvD27pU/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCePXzRRrydOl2l-NhMYa2wCSW3Ug",
      view: 294000,
      like: 0,
      dislike: 0,
      details: '294 N lượt xem',
      time: '5 tháng trước'
    },

    {
      id: 8,
      type:"Game",
      title: 'Sena Vlog - Build dàn PC xịn xò gần 100 triệu , con cưng của thầy hiệu trưởng ',
      author: 'Sena',
      url: 'https://www.youtube.com/embed/NqQjnEKsw_o',
      avatarurl: 'https://yt3.ggpht.com/a-/AOh14GgUuzrsCY5op6hjiKg2VNxMvoPT8uJGcxSuVw=s68-c-k-c0x00ffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/NqQjnEKsw_o/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLByTaF1thE5pNvfrz_FzJwz2gKnIg",
      view: 6,
      like: 0,
      dislike: 0,
      details: '181 N lượt xem',
      time: '2 tuần trước'
    },

    {
      id: 9,
      type:"Music",
      title: 'TEST NHẠC PIPO NGHE MEO MÉO MEO MÈO MEO  | LÊ BẢO ',
      author: 'Lê Bảo Official',
      url: 'https://www.youtube.com/embed/NLb1sDiNQSI',
      avatarurl: 'https://yt3.ggpht.com/a-/AOh14GjvpLWoM2X3rPvy0uIYG6WhI2oe-jGpuEsaaA=s68-c-k-c0x00ffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/NLb1sDiNQSI/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD5lF-k06EZdxma3-v19HICn3DFJA",
      view: 6,
      like: 0,
      dislike: 0,
      details: '10 N lượt xem',
      time: '2 tuần trước'
    },
    {
      id: 10,
      type:"Music",
      title: 'BỐ GIÀ REMIX | CON TRAI CHÚ, ẢNH NGON LẮM! | TRẤN THÀNH FT. TRÚC NHÂN ',
      author: 'TRẤN THÀNH TOWN',
      url: 'https://www.youtube.com/embed/BNOrbeXMbrQ',
      avatarurl: 'https://yt3.ggpht.com/a-/AOh14GigxX33RGLAWAa6TlxZdxTE_-yBwdxjMm35Gg=s68-c-k-c0x00ffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/BNOrbeXMbrQ/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB7uVzxGvOnOZAuEbEbGsQjsaTUNQ",
      view: 6,
      like: 0,
      dislike: 0,
      details: '4 Tr lượt xem',
      time: '2 tuần trước'
    },
    {
      id: 11,
      type:"News",
      title: '(Talkshow) Ra mắt mẫu áo Mixigaming mới siêu chất, Mixigaming reaction Xạ Thủ Đua Tài ',
      author: 'MixiGaming',
      url: 'https://www.youtube.com/embed/w5lbpH5S-wA',
      avatarurl: 'https://yt3.ggpht.com/a-/AOh14GjjSkfEtGkyqFF79Y5aSoY1H8DAV0CunbWFkw=s68-c-k-c0x00ffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/w5lbpH5S-wA/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAY85P5g6UA0Ywq9yMKgVHxJjw6Cw",
      view: 6,
      like: 0,
      dislike: 0,
      details: '36 N lượt xem',
      time: '2 tuần trước'
    },
    {
      id: 12,
      type:"Game",
      title: 'TRUNG RIVEN | PERFECT GIÁO ÁN RIVEN CỰC CHUẨN CỦA ANH TRUNG ',
      author: 'Ba rọi béo',
      url: 'https://www.youtube.com/embed/2ccpqCeeJSI',
      avatarurl: 'https://yt3.ggpht.com/a-/AOh14GjDM4J7f0vZ5xOGYthXKCyd7MYK1Aylls_GIg=s68-c-k-c0x00ffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/2ccpqCeeJSI/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAl2JRBQErbdO6HnQHPcwx7lqT8Cg",
      view: 6,
      like: 0,
      dislike: 0,
      details: '181 N lượt xem',
      time: '2 tuần trước'
    },
    {
      id: 13,
      type:"Game",
      title: 'THẦY BA CÙNG VỚI ANH EM SBTC QUẨY CỰC NHIỆT VỚI FALL GUYS ',
      author: 'Ba Rọi Béo',
      url: 'https://www.youtube.com/embed/VY0dPdBU7Ks',
      avatarurl: 'https://yt3.ggpht.com/a-/AOh14GjDM4J7f0vZ5xOGYthXKCyd7MYK1Aylls_GIg=s68-c-k-c0x00ffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/VY0dPdBU7Ks/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBckCdtQHW9ACuhu26pwW4JPq1Paw",
      view: 6,
      like: 0,
      dislike: 0,
      details: '99 N lượt xem',
      time: '2 tuần trước'
    },
    
    {
      id: 14,
      type:"Sport",
      title: "View from the Away End & Pitchside Cam | Wolves 0-1 Manchester United | Access All Areas",
      author: "Manchester United",
      url: "https://www.youtube.com/embed/-nn85Yvc_vU",
      avatarurl: 'https://yt3.ggpht.com/ytc/AKedOLQsEJAJVWu3WFjxnLP_hjwuJqXm5Y_egivBEAW7tQ=s88-c-k-c0x00ffffff-no-rj',
      pictureURL:"https://i.ytimg.com/vi/-nn85Yvc_vU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCC7VD1RySvkT8yxLOVS3NiOfGz6Q",
      view: 319784,
      like: 9700,
      dislike: 1,
      details: "319 N lượt xem",
      time: '2 ngày trước'
    },
    {
      id: 15,
      type:"News",
      title: 'Cập nhật tình hình dịch COVID-19 ngày 19/8: Việt Nam có 100 ca âm tính từ 1-3 lần với SARS-CoV-2  ',
      author: 'Alo News',
      url: 'https://www.youtube.com/embed/T4T6aQh00Uo',
      avatarurl: 'https://yt3.ggpht.com/a/AATXAJzXjfN-RytRbMJFCXYtSTfFKCugrLXHE82Dzvw5=s88-c-k-c0xffffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/1nypVbesGD4/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCPp_n5e-5JSnEDy6yUMsPK6tyDGg",
      view: 6,
      like: 0,
      dislike: 0,
      details: '49 N lượt xem',
      time: '2 tuần trước'
    },
    {
      id: 16,
      type:"News",
      title: 'TTCTSD.12 - Anh Em Faptv Tổ Chức Sinh Nhật Bất Ngờ Cho Anh Long Đẹp Trai ',
      author: 'Tuổi Trẻ Chưa Trải Sự Đời',
      url: 'https://www.youtube.com/embed/7CT9YzOvMqQ',
      avatarurl: 'https://yt3.ggpht.com/a-/AOh14GhEkImPnKaDkN15nJ66wM5JktBwi_jxvN5SkQ=s68-c-k-c0x00ffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/7CT9YzOvMqQ/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCHd5FdT-3iwTRFnLHlVA0K3HRbaA",
      view: 6,
      like: 0,
      dislike: 0,
      details: '181 N lượt xem',
      time: '2 tuần trước'
    },

    {
      id: 17,
      type:"News",
      title: 'Modified Cars & Supercars Leaving a Car Show! - C63s CRASH, 800HP Supra, Aventador SVJ, Skyline,... ',
      author: 'DutchMotorsport',
      url: 'https://www.youtube.com/embed/z5dTorypxaQ',
      avatarurl: 'https://yt3.ggpht.com/a-/AOh14Gi0sRf67XWdvQb73L_-B0Fn3j2QGWAI5nMl8Q=s68-c-k-c0x00ffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/z5dTorypxaQ/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAuRO28-UXKT_7fjEOm6H9dbRa8Dw",
      view: 6404148,
      like: 0,
      dislike: 0,
      details: '6,4 Tr lượt xem',
      time: '2 tuần trước'
    },

    {
      id: 18,
      type:"Music",
      title: "QUAN HỆ RỘNG (BÌNHGOLD'S ALBUM) - BÌNH GOLD OFFICIAL MP3 ",
      author: "Bình gold",
      url: "https://www.youtube.com/embed/goQUV0jW8b4",
      avatarurl: 'https://yt3.ggpht.com/a-/AOh14Gir3Gk8iElChTeygkniVjA82AzmuvIBENa5rA=s68-c-k-c0x00ffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/goQUV0jW8b4/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAxrolSXT7umKaajPTKEh_PjXDpkg",
      view: 1,
      like: 1,
      dislike: 1,
      details: "100 N lượt xem ",
      time: '2 năm trước'
    },

    {
      id: 19,
      type:"News",
      title: 'LAMBORGHINI Huracan EVO Spyder *LOUD* POV Test Drive by AutoTopNL ',
      author: 'AutoTopNL',
      url: 'https://www.youtube.com/embed/wt5O8CzQ3DA',
      avatarurl: 'https://yt3.ggpht.com/a-/AOh14GimXwHtULABnGJSrSnuyUebN1HR0Gja_ig9Iw=s68-c-k-c0x00ffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/ILm3d00W9KI/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBX0OGcxVi9RcJUX5464StOrEaJMQ",
      view: 6,
      like: 0,
      dislike: 0,
      details: '3.9 Tr lượt xem',
      time: '2 tuần trước'
    },

    {
      id: 20,
      type:"Game",
      title: 'Sena Vlog - Build dàn PC xịn xò gần 100 triệu , con cưng của thầy hiệu trưởng ',
      author: 'Sena',
      url: 'https://www.youtube.com/embed/NqQjnEKsw_o',
      avatarurl: 'https://yt3.ggpht.com/a-/AOh14GgUuzrsCY5op6hjiKg2VNxMvoPT8uJGcxSuVw=s68-c-k-c0x00ffffff-no-rj-mo',
      pictureURL:"https://i.ytimg.com/vi/NqQjnEKsw_o/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLByTaF1thE5pNvfrz_FzJwz2gKnIg",
      view: 6,
      like: 0,
      dislike: 0,
      details: '181 N lượt xem',
      time: '2 tuần trước'
    },
    // {
    //   id: 21,
    //   type:"Game",
    //   title: 'TRUNG REACTION | TOP 7 Streamer VN xinh đẹp tài năng nhưng lận đận tình duyên: ViruSs, Misthy...',
    //   author: 'Ba rọi béo',
    //   url: 'https://www.youtube.com/embed/FCH7NPyB3xg',
    //   avatarurl: 'https://yt3.ggpht.com/a-/AOh14GjDM4J7f0vZ5xOGYthXKCyd7MYK1Aylls_GIg=s68-c-k-c0x00ffffff-no-rj-mo',
    //   pictureURL:"https://i.ytimg.com/vi/FCH7NPyB3xg/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBSCG-d80eK3_aluz6kozBpOPrBNw",
    //   view: 6,
    //   like: 0,
    //   dislike: 0,
    //   details: '181.989 N lượt xem',
    //   time: '2 tuần trước'
    // },
  ]

}
