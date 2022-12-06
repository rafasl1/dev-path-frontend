import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import { Header } from "./components/Header/Header"
import { FindYourPath } from "./pages/FindYourPath/FindYourPath"
import { FinishScheduling } from "./pages/FinishScheduling/FinishScheduling"
import { Home } from "./pages/Home/Home"
import { Login } from "./pages/Login/Login"
import { Mentor } from "./pages/Mentor/Mentor"
import { MentoringPage } from "./pages/MentoringPage/MentoringPage"
import { MentorProfile } from "./pages/MentorProfile/MentorProfile"
import { Profile } from "./pages/Profile/Profile"
import { Registration } from "./pages/Registration/Registration"
import { Terms } from "./pages/Terms/Terms"
import { Trail } from "./pages/Trail/Trail"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>

          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/cadastro" element={<Registration/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/perfil" element={<Profile/>} />
              <Route path="/perfil/mentor" element={<MentorProfile/>} />
              <Route path="/mentoria" element={<MentoringPage />} />
              <Route path="/mentoria/:mentorId" element={<Mentor />} />
              <Route path="/find-your-path" element={<FindYourPath />} />
              <Route path="/:trailId" element={<Trail />} />
              <Route path="/find-your-path/:trailId" index element={<Trail />} />
              <Route path="/create-schedule/terms/:mentorId" index element={<Terms />} />
              <Route path="/create-schedule/finish" index element={<FinishScheduling />} />
          </Routes>


      </main>
    </BrowserRouter>
  )
}

export default App