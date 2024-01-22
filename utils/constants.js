export const enviroment = 'staging' //staging or production

export const paymentEnviroment = 'production' //staging or production

export const LocalIP = '192.168.0.108:8000'
export const ProductionIP = 'api.brainheaters.in' //App Sever
export const ip = enviroment === 'staging' ? LocalIP:ProductionIP
export const BaseURL = enviroment === 'staging' ? `http://${ip}`:`https://${ip}`

export const razorPayKeyStaging = ""
export const razorPayKeyProduction = ""

export const AvatarPlaceholder = 'https://brainheaterspublicbucket.s3.ap-south-1.amazonaws.com/users/default_avatar.png'
export const BHLogoAvatar = 'https://brainheaterspublicbucket.s3.ap-south-1.amazonaws.com/bh_logo.png'
export const BHLogoWhite = 'https://brainheaterspublicbucket.s3.ap-south-1.amazonaws.com/bhlogowhite.png'

export const UYD = {    
    'mumbai university':{

        'first year':['fe'],
        'second year': [ 'computers', 'it','mechanical','electrical','civil','extc','automobile','instrumentation','electronics'],
        'third year' : [ 'computers', 'it','mechanical','electrical','civil','extc','automobile','instrumentation','electronics'],
        'fourth year': [ 'computers', 'it','mechanical','electrical','civil','extc','automobile','instrumentation','electronics'],
    },

    'gujarat technological university':{
        
        'first year':['fe'],
        'second year': [ 'computers', 'it','ece','mechanical','electrical','civil','instrumentation','production','electronics'],
        'third year': [ 'computers', 'it','ece','mechanical','electrical','civil','instrumentation','production','electronics','automobile'],
        'fourth year': [ 'computers', 'it','ece','mechanical','electrical','civil','instrumentation','production','electronics','automobile'],

    }
}

export const Colleges_List = {
    'mumbai university':[
        "A. P. Shah Institute of Technology",
        "Alamuri Ratnamala Institute of Engineering & Technology",
        "Anjuman-I-Islam's M.H. Saboo Siddik College of Engineering",
        "Anjuman-I-Islam's School of Engineering & Technology",
        "Atharva College of Engineering",
        "B.R. Harne College of Engineering & Technology",
        "Bharati Vidyapeeth's College of Engineering",
        "Datta Meghe College of Engineering",
        "Dilkap Research Institute of Engineering & Management Studies",
        "Don Bosco Institute of Technology",
        "Dwarkadas J. Sanghvi College of Engineering",
        "Finolex Academy of Management & Technology's College of Engineering",
        "Fr. Conceicao Rodrigues College of Engineering",
        "Fr. Conceicao Rodrigues Institute of Technology",
        "G.M. Vedak Institute of Technology",
        "G.V. Acharya Institute of Engineering & Technology",
        "Gharda Foundation's Gharda Institute of Technology",
        "Ideal Foundation's Ideal Institute of Technology",
        "Jawahar Education Society's Annasaheb Chudaman Patil College of Engineering",
        "K.C. College of Engineering",
        "K.J. Somaiya College of Engineering",
        "K.J. Somaiya Institute of Engineering and Information Technology",
        "Konkan Gyanpeeth College of Engineering",
        "L.R. Tiwari College Engineering",
        "Leelavati Awhad Institute of Technology, Management Studies & Research",
        "Lokmanya Tilak College of Engineering",
        "Maharshi Parshuram College of Engineering",
        "Mahatma Gandhi Mission's College of Engineering & Technology",
        "Metropolitan Institute of Technology & Management",
        "Pillai HOCL College of Engg. & Technology",
        "Pillai's Institute of Information Technology, Engineering",
        "Rajaram Shinde College of Engineering",
        "Rajendra M. Mane College of Engineering",
        "Rajiv Gandhi Institute of Technology",
        "Ramrao Adik Institute of Technology",
        "Rizvi College of Engineering",
        "Saraswati Education Society's Group of Institutions Faculty of Engineering",
        "Saraswati Education Society's Saraswati College of Engineering",
        "Saraswati Education Society's Yadavrao Tasgaonkar College of Engineering & Management",
        "Sardar Patel Institute of Technology",
        "Shah and Anchor Kutchi Enginering College",
        "Shivajirao S. Jondhale College of Engineering",
        "Shivajirao S. Jondhale College of Engineering & Technology",
        "SIES Graduate School of Technology",
        "Sindhudurg Shikshan Prasarak Mandal's College of Engineering",
        "Smt. Indira Gandhi Engineering College",
        "St. Francies Institute of Technology",
        "St. John College of Engineering",
        "Terna College of Engineering",
        "Thadomal Shahani Engineering College",
        "Thakur Charitable Trust's Viva Institute of Technology",
        "Thakur College of Engineering & Technology",
        "Theem College of Engineering",
        "Vasantdada Patil Pratishthan's College of Engineering",
        "Vidya Vikas Education Trust's Universal College of Engineering",
        "Vidyalankar Institute of Technology",
        "Vidyavardhini's College of Engineering & Technology",
        "Vishwaniketan's Institute of Management Entepreneurship and Engineeering Technology",
        "Vishwatmak Om Gurudev College of Engineering",
        "Vivekanand Education Society's Institute of Technology",
        "Watumull Institute of Electronic Engineering and Computer Technology",
        "Xavier Institute of Engineering",
        "Yadavrao Tasgaonkar Institute of Engineering & Technology",
        "Other"
    ],
    'gujarat technological university':[
        "A. D. Patel Institute of Technology",
        "Adani Institute of Infrastructure Engineering",
        "Aditya Silver Oak Institute of Technology Within Ahmedabad Municipal Corporation Limit",
        "Ahmedabad Institute of Technology",
        "Alpha College of Engineering & Technology",
        "Amiraj College of Engineering & Technology",
        "Apollo Institute of Engineering & Technology",
        "Arrdekta Institute of Technology",
        "Arun Muchhala Engineering College",
        "Aurum Institute of Technology",
        "B. H. Gardi College of Engineering & Technology",
        "Babaria Institute of Technology",
        "Balaji Engineering College",
        "Bhagwan Arihant Institute of Technology",
        "Bhagwan Mahavir College of Engineering and Technology",
        "Birla Vishvakarma Mahavidyalaya",
        "C. K. Pithawala College of Engg & Technology",
        "Central Institute of Plastics Engineering & Technology",
        "D a Degree Enggineering and Technology",
        "Darshan Institute of Engineering & Technology",
        "Dr. Jivraj Mehta Institute of Technology",
        "Dr. Subhash Technical Campus",
        "Dr. V. R. Godhania College of Engineering & Technology",
        "Dr.s.& S.s.ghandhy Government Engineering College, Surat.",
        "Engineering College, Tuwa",
        "G. H. Patel College of Engineering & Technology",
        "Gandhinagar Institute of Technology",
        "Gidc Degree Engineering College",
        "Government Engineering College Bhuj",
        "Government Engineering College Daman",
        "Government Engineering College Palanpur",
        "Government Engineering College, Bharuch",
        "Government Engineering College, Bhavnagar",
        "Government Engineering College, Dahod",
        "Government Engineering College, Godhra",
        "Government Engineering College, Modasa",
        "Government Engineering College, Rajkot",
        "Government Engineering College, Valsad",
        "Government Engineering College,at.katpur, Patan",
        "Grow More Foundation's Group of Institutions",
        "Gujarat Institute of Technical Studies",
        "Gujarat Power Engineering and Research Institute",
        "Gyanmanjari Institute of Technology",
        "Hasmukh Goswami College of Engineering",
        "Hjd Institute of Technical Education and Research",
        "Institute of Technology and Management Universe Technical Campus",
        "Ipcowala Institute of Engineering & Technology",
        "K. J. Institute of Engineering & Technology",
        "Kalol Institute of Technology & Research Centre",
        "Kankeshwaridevi Institute of Technology,jamnagar",
        "Knowledge Institute of Technology and Engineering",
        "L. D. College of Engineering",
        "L. J. Institute of Engineering & Technology",
        "Laljibhai Chaturbhai Institute of Technology",
        "Laxmi Institute of Technology, Sarigam",
        "Lukhdhirji Engineering College",
        "M.k. College of Engineering & Technological Research",
        "Madhuben & Bhanubhai Patel Institute of Technology",
        "Mahatma Gandhi Institute of Technical Education and Research Centre",
        "Mahavir Swami College of Engineering & Technology",
        "Marwadi Education Foundation's Group of Institutions",
        "Merchant Engineering College",
        "Narnarayan Shastri Institute of Technology",
        "Neotech Institute of Technology",
        "New L.j. Institute of Engineering & Technology",
        "Noble Group of Institutions",
        "Om Engineering College",
        "Om Institute of Technology",
        "Pacific School of Engineering",
        "Prime Institute of Engineering & Technology",
        "R.n.g. Patel Institute of Technology Rngpit",
        "S. P. B. Patel Engineering College",
        "S.s.agrawal Institute of Engineering & Technology",
        "Sabar Institute of Technology for Girls, Tajpur, Sabarkantha",
        "Sal College of Engineering",
        "Sal Engineering & Technical Institute",
        "Sal Institute of Technology & Engineering Research",
        "Samarth College of Engineering & Technology",
        "Sanjaybhai Rajguru College of Engineering",
        "Sardar Patel College of Engineering",
        "Sardar Vallabhbhai Patel Institute of Technology(Svit)",
        "Sarvajanik College of Engineering & Technology",
        "Shankersinh Vaghela Bapu Technical Campus",
        "Shantilal Shah Engineering College",
        "Shree Pandit Nathulalji Vyas Technical Campus",
        "Shree Swami Atmanand Saraswati Institute of Technology",
        "Shree Swaminarayan Institute of Technology",
        "Shri J.m. Sabva Institute of Engineering & Technology",
        "Shri Labhubhai Trivedi Institute of Engineering and Technology",
        "Shri S'ad Vidya Mandal Institute of Technology",
        "Shri Satsangi Saketdham Ram Ashram Group of Institutions",
        "Shri Sitarambhai Naranji Patel Institute of Technology,managed by Vidyabharti Trust,umrakh-bardoli",
        "Shroff S. R. Rotary Institute of Chemical Technology",
        "Sigma Engineering College( Matar)",
        "Sigma Institute of Engineering",
        "Silver Oak College of Engineering & Technology Within Ahmedabad Municipal Corporation Limit",
        "Smt Shantaben Haribhai Gajera Engineering College",
        "Smt. S. R. Patel Engineering College",
        "Swaminarayan College of Engineering & Technology(Degree)",
        "Tatva Institute of Technological Studie,(Tits),modasa",
        "V.v.p.engineering College",
        "Vadodara Institute of Engineering",
        "Veerayatan Institute of Engineering",
        "Vidhyadeep Institute of Engineering and Technology",
        "Vishwakarma Government Engineering College,chandkheda",
        "Other"
    ]
}

export const Years= [
    'first year',
    'second year',
    'third year',
    'fourth year'
]

export const Universities= [
    'mumbai university',
    'gujarat technological university',
]


export const Departments=[
    'computers',
    'production',
    'electronics',
    'chemical',
    'instrumentation',
    'automobile',
    'extc',
    'fe',
    'electrical',
    'mechanical',
    'it',
    'civil',
    'biomedical',
    'etrx',
]

export const VoteUniversityList = [
    'Pune University (SPPU)',
    'Delhi University (DU)',
    'Jawaharalal Nehru Tech... (JNTU)',
    'Rajasthan Tech. University (RTU)',
    'Anna University (AU)',
    'Punjab Tech. University (PTU)',
    'Other University'
]
export const VoteCourseList = [
    'Diploma Courses',
    'Bachelor of Science',
    'Pharmacy',
    'Commerce Courses',
    'Arts Courses',
    'Medical Courses',

]

export const TeamAvatars = [
    'https://d1yhy6f9ycghig.cloudfront.net/users/harsh2521@gmail.com_1658122581149.jpg',
    'https://d1yhy6f9ycghig.cloudfront.net/users/ridhidama23@gmail.com_1640259130080.jpg',
    'https://d1yhy6f9ycghig.cloudfront.net/users/dcpc167%40gmail.com_1634996921261.jpg',
    'https://d1yhy6f9ycghig.cloudfront.net/users/shaunmisquitta75@gmail.com_1658130831189.jpeg'
]
