import { Feature } from "@/types/feature";
import { ElectricBoltRounded, GppGoodRounded, PaymentsRounded, RestoreRounded } from "@mui/icons-material";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <PaymentsRounded fontSize="large" />
    ),
    title: "Transparent Costs",
    paragraph:
      "No hidden costs. It’s as simple as that. We’ll always be upfront about all fees involved.",
  },
  {
    id: 2,
    icon: (
      <ElectricBoltRounded fontSize="large" />
    ),
    title: "Simple and Fast",
    paragraph:
      "Send your money the way you want to. Quick, reliable transfers through UK Faster Payments, SEPA, SWIFT and BACS.",
  },
  {
    id: 3,
    icon: (
      <GppGoodRounded fontSize="large" />
    ),
    title: "Secure and Regulated",
    paragraph:
      "Never have to worry missing funds, you’re protected under the UK E-Money regulations and we’re able to provide full transparency to all of our clients.",
  },
  {
    id: 4,
    icon: (
      <RestoreRounded fontSize="large"/>
    ),
    title: "24/7 Support",
    paragraph:
      "We’ll always be there whenever you need us the most. We understand that payments never stop, nor do we.",
  },
  // {
  //   id: 1,
  //   icon: (
  //     <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
  //       <path
  //         opacity="0.5"
  //         d="M39 12C39.5523 12 40 12.4477 40 13V39C40 39.5523 39.5523 40 39 40H13C12.4477 40 12 39.5523 12 39V33C12 32.4477 12.4477 32 13 32H31C31.5523 32 32 31.5523 32 31V13C32 12.4477 32.4477 12 33 12H39Z"
  //       />
  //       <rect width="28" height="28" rx="1" />
  //     </svg>
  //   ),
  //   title: "Fully Customizable",
  //   paragraph:
  //     "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  // },
  // {
  //   id: 1,
  //   icon: (
  //     <svg width="40" height="45" viewBox="0 0 40 45" className="fill-current">
  //       <path
  //         opacity="0.5"
  //         d="M31.579 37.8948C28.6737 37.8948 26.3158 35.5369 26.3158 32.6317C26.3158 31.9159 26.4527 31.2306 26.7135 30.6015C26.7959 30.4027 26.7605 30.1711 26.6083 30.019L24.9997 28.4103C24.7766 28.1872 24.4043 28.2238 24.2487 28.4983C23.5588 29.7145 23.1579 31.125 23.1579 32.6317C23.1579 37.2843 26.9263 41.0527 31.579 41.0527V43.0035C31.579 43.449 32.1175 43.6721 32.4325 43.3571L35.9622 39.8273C36.1575 39.6321 36.1575 39.3155 35.9622 39.1202L32.4325 35.5905C32.1175 35.2755 31.579 35.4986 31.579 35.9441V37.8948ZM31.579 24.2106V22.2598C31.579 21.8144 31.0404 21.5913 30.7254 21.9063L27.1957 25.436C27.0004 25.6313 27.0004 25.9479 27.1957 26.1431L30.7254 29.6729C31.0404 29.9879 31.579 29.7648 31.579 29.3193V27.3685C34.4842 27.3685 36.8421 29.7264 36.8421 32.6317C36.8421 33.3474 36.7052 34.0328 36.4444 34.6618C36.362 34.8606 36.3974 35.0922 36.5496 35.2444L38.1582 36.853C38.3813 37.0762 38.7536 37.0396 38.9092 36.7651C39.5991 35.5488 40 34.1384 40 32.6317C40 27.9791 36.2316 24.2106 31.579 24.2106Z"
  //       />
  //       <path d="M18.9474 32.6316C18.9474 35.4705 19.8099 38.0969 21.2941 40.2796C21.7904 41.0094 21.3054 42.1053 20.4229 42.1053H4.21053C1.87368 42.1053 0 40.2316 0 37.8947V4.21053C0 1.89474 1.87368 0 4.21053 0H6.31579H16.8421H29.4737C31.7895 0 33.6842 1.87368 33.6842 4.21053V17.9544C33.6842 18.5032 33.1804 18.9474 32.6316 18.9474C25.0737 18.9474 18.9474 25.0737 18.9474 32.6316Z" />
  //     </svg>
  //   ),
  //   title: "Free and Open-Source",
  //   paragraph:
  //     "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  // },
];
export default featuresData;
