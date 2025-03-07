<!-- @format -->

<template>
  <div
    class="login-container"
    :class="{ 'sidebar-collapsed': isSidebarCollapsed }">
    <div id="item-0" :class="{ collapsed: isSidebarCollapsed }">
      <div class="logo">
        <img src="/image/logo.png" alt="Logo" class="logo-image" />

        <h5 class="name" :class="{ 'hidden-name': isSidebarCollapsed }">
          Asian Development Foundation College
        </h5>
      </div>

      <div class="button-container">
        <button class="btn" :class="{ 'collapsed-btn': isSidebarCollapsed }">
          <font-awesome-icon
            :icon="['fas', 'tachometer-alt']"
            class="custom-icon" />

          <span v-if="!isSidebarCollapsed"> Dashboard </span>
        </button>

        <div class="relative block text-left">
          <button
            @click="toggleDropdown(1)"
            class="btn"
            :class="{ 'collapsed-btn': isSidebarCollapsed }">
            <font-awesome-icon
              :icon="['fas', 'clipboard-list']"
              class="custom-icon" />

            <span v-if="!isSidebarCollapsed">
              <div class="btn-nm">Class Record</div>
              <font-awesome-icon
                :icon="['fas', 'angle-down']"
                class="arrow transition-transform duration-300"
                :class="{ 'rotate-180': isDropdownOpen(1) }" />
            </span>
          </button>

          <div
            v-if="activeDropdown === 1 && !isSidebarCollapsed"
            class="dropdown">
            <button class="side-btn" @click="goToGrades">Grades</button>

            <button class="side-btn" @click="goToAttendance">Attendance</button>
          </div>
        </div>

        <div class="relative block text-left">
          <button
            @click="toggleDropdown(2)"
            class="btn"
            :class="{ 'collapsed-btn': isSidebarCollapsed }">
            <font-awesome-icon
              :icon="['fas', 'user-graduate']"
              class="custom-icon" />

            <span v-if="!isSidebarCollapsed">
              <div class="btn-nm1">Student</div>
              <font-awesome-icon
                :icon="['fas', 'angle-down']"
                class="arrow1 transition-transform duration-300"
                :class="{ 'rotate-180': isDropdownOpen(2) }" />
            </span>
          </button>

          <div
            v-if="activeDropdown === 2 && !isSidebarCollapsed"
            class="dropdown">
            <button class="side-btn" @click="goToGrades">Grades</button>

            <button class="side-btn" @click="goToAttendance">Attendance</button>
          </div>
        </div>

        <button class="btn" :class="{ 'collapsed-btn': isSidebarCollapsed }">
          <font-awesome-icon
            :icon="['fas', 'chalkboard']"
            class="custom-icon" />

          <span v-if="!isSidebarCollapsed"> Classes </span>
        </button>

        <button class="btn" :class="{ 'collapsed-btn': isSidebarCollapsed }">
          <font-awesome-icon
            :icon="['fas', 'clipboard-check']"
            class="custom-icon" />

          <span v-if="!isSidebarCollapsed"> Attendance </span>
        </button>

        <button class="btn" :class="{ 'collapsed-btn': isSidebarCollapsed }">
          <span v-if="!isSidebarCollapsed"> Button 6 </span>
        </button>
      </div>
    </div>

    <div id="item-1">
      <button class="btns" id="resize" @click="toggleSidebar">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>

      <div class="nav">
        <button class="btns1">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </button>

        <button class="btns1">
          <font-awesome-icon :icon="['fas', 'bell']" />
        </button>

        <button class="btns1">
          <font-awesome-icon :icon="['fas', 'clipboard-list']" />
        </button>
      </div>
    </div>

    <div id="item-2">
      <div id="box-0" class="box cards">
        <div id="card-1" class="card"></div>

        <div id="card-2" class="card">
          <div class="inputs">
            <p>Student Profile</p>
            <div class="separator"></div>
            <div class="separator">
              <div class="flat-quiz-table-container">
                <table class="flat-quiz-table">
                  <thead>
                    <tr>
                      <th rowspan="2" class="quiz-header"></th>
                      <th colspan="11" class="periods-header">Quiz</th>
                    </tr>
                    <tr class="period-row">
                      <th
                        v-for="period in periods"
                        :key="period"
                        class="period-cell">
                        {{ period }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(exam, examIndex) in examTypes"
                      :key="examIndex"
                      class="exam-row">
                      <td class="exam-type">{{ exam }}</td>
                      <td
                        v-for="(period, periodIndex) in periods"
                        :key="periodIndex"
                        class="input-cell">
                        <input
                          type="text"
                          class="flat-input"
                          v-model="quizScores[examIndex][periodIndex]"
                          @input="validateInput($event, examIndex, periodIndex)"
                          placeholder="Score" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p>Recitation</p>
            <div class="separator">
              <div class="flat-quiz-table-container">
                <table class="flat-quiz-table">
                  <thead>
                    <tr>
                      <th rowspan="2" class="quiz-header"></th>
                      <th colspan="6" class="periods-header">Recitation</th>
                    </tr>
                    <tr class="period-row">
                      <th
                        v-for="period in periods"
                        :key="period"
                        class="period-cell">
                        {{ period }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(exam, examIndex) in examTypes"
                      :key="examIndex"
                      class="exam-row">
                      <td class="exam-type">{{ exam }}</td>
                      <td
                        v-for="(period, periodIndex) in periods"
                        :key="periodIndex"
                        class="input-cell">
                        <input
                          type="text"
                          class="flat-input"
                          v-model="quizScores[examIndex][periodIndex]"
                          @input="validateInput($event, examIndex, periodIndex)"
                          placeholder="Score" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p>Summative</p>
            <div class="separator"></div>
            <p>Project</p>
            <div class="separator"></div>
            <p>Exam</p>
          </div>
        </div>
      </div>

      <div id="box-1" class="box">
        <div class="form"></div>
      </div>

      <div id="box-2" class="box"></div>

      <div id="box-3" class="box"></div>

      <div id="box-4" class="box"></div>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faBell,
  faClipboardList,
  faTachometerAlt, // Dashboard
  faUserGraduate, // Student
  faChalkboard, // Classes
  faClipboardCheck, // Attendance
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

// Add icons to the library
library.add(
  faBars,
  faBell,
  faClipboardList,
  faTachometerAlt,
  faUserGraduate,
  faChalkboard,
  faClipboardCheck,
  faAngleDown
);

export default {
  name: "FlatQuizTable",
  components: {
    FontAwesomeIcon,
  },

  data() {
    return {
      activeDropdown: null,
      isSidebarCollapsed: false,
      periods: [
        "1st",
        "2nd",
        "3rd",
        "4th",
        "5th",
        "6th",
        "7th",
        "8th",
        "9th",
        "10th",
      ],
      examTypes: ["Prelims", "Mid-Term", "Semi-Finals", "Finals"],
      quizScores: [
        ["", "", "", "", "", "", "", "", "", "", ""], // Prelims
        ["", "", "", "", "", "", "", "", "", "", ""], // Mid-Term
        ["", "", "", "", "", "", "", "", "", "", ""], // Semi-Finals
        ["", "", "", "", "", "", "", "", "", "", ""], // Finals
      ],
    };
  },

  methods: {
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
      // Close any open dropdowns when sidebar is collapsed
      if (this.isSidebarCollapsed) {
        this.activeDropdown = null;
      }
    },

    toggleDropdown(index) {
      if (this.isSidebarCollapsed) return; // Don't toggle dropdowns when sidebar is collapsed
      this.activeDropdown = this.activeDropdown === index ? null : index;
    },

    goToGrades() {
      alert("Navigating to Grades...");
      // Example: this.$router.push('/grades');
    },

    goToAttendance() {
      alert("Navigating to Attendance...");
      // Example: this.$router.push('/attendance');
    },

    validateInput(event, examIndex, periodIndex) {
      const value = event.target.value;
      if (value && !/^\d*\.?\d*$/.test(value)) {
        this.quizScores[examIndex][periodIndex] = this.quizScores[examIndex][
          periodIndex
        ].replace(/[^\d.]/g, "");
      }
    },

    getScores() {
      return {
        examTypes: this.examTypes,
        periods: this.periods,
        scores: this.quizScores,
      };
    },
  },

  computed: {
    isDropdownOpen() {
      return (index) => this.activeDropdown === index;
    },
  },
};
</script>

<style scoped>
.login-container {
  display: grid;
  grid-template-rows: 4em auto;
  grid-template-columns: 15em 1fr;
  grid-template-areas:
    "item-0 item-1"
    "item-0 item-2";
  height: 100vh;
  transition: all 0.3s ease;
  overflow: hidden;
}

.sidebar-collapsed {
  grid-template-columns: 5em 1fr;
}

#item-0 {
  background-color: #fffafa;
  grid-area: item-0;
  position: sticky;
  top: 0;
  left: 0;
  width: 15em;
  height: 100vh;
  transition: width 0.3s ease;
  overflow: hidden;
}

#item-0.collapsed {
  width: 5em;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding-top: 1em;
  justify-content: center;
}

.btn {
  width: 200px;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: transparent;
  color: rgb(84, 84, 84);
  transition: 0.3s;
  white-space: nowrap;
  overflow: hidden;
}

.btn:hover {
  background-color: #e4e7ec;
  color: black;
}

.btn:focus {
  border-color: royalblue;
  outline: none;
  color: #566dff;
  background-color: #ecf3ff;
}

.btn-nm {
  display: inline;
  margin-right: 2.7rem;
}

.btn-nm1 {
  display: inline;
  margin-right: 5.1rem;
}

.collapsed-btn {
  width: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-icon {
  padding-left: 4px;
  padding-right: 8px;
}

.dropdown {
  display: flex;
  flex-direction: column;
  width: 175px;
  margin-top: 4px;
  margin-left: 1.6em;
  gap: 4px;
  color: rgb(53, 53, 53);
}

.side-btn {
  width: 200px;
  padding: 10px 1em;
  font-size: 16px;
  text-align: left;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: transparent;
  color: rgb(0, 0, 0);
}

.side-btn:hover {
  background-color: #e4e7ec;
  width: auto;
  transition: 0.3s;
}

#item-1 {
  display: flex;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #fffafa;
  grid-area: item-1;
  border-left: 1px solid #959baa;
  border-bottom: 1px solid #959baa;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.btns {
  width: 2.4em;
  padding: 10px;
  font-size: 16px;
  text-align: center;
  border: 1px solid #708090;
  border-radius: 8px;
  cursor: pointer;
  background-color: transparent;
  color: rgb(56, 56, 56);
  transition: 0.3s;
  margin-left: 8px;
}

.btns:hover {
  background-color: #e4e4e4;
}

.btns1 {
  width: 2.2em;
  padding: 10px;
  font-size: 20px;
  text-align: center;
  border: 1px solid #bfdfff;
  border-radius: 50px;
  cursor: pointer;
  background-color: transparent;
  color: gray;
  transition: 0.3s;
  margin-left: 8px;
}

.rotate-180 {
  transform: rotate(180deg);
}

.nav {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-right: 4em;
}

.logo {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  padding: 0 1rem;
  transition: all 0.3s ease;
}

.logo-image {
  width: 4rem;
  object-fit: contain;
  transition: all 0.3s ease;
  padding: 0.5rem;
}

#item-0.collapsed .logo-image {
  width: 3.5rem;
}

.name {
  font-size: 0.9rem;
  text-align: center;
  margin-top: 0.5rem;
  font-weight: bold;
  color: #333;
  max-width: 100%;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s ease, visibility 0.3s ease, max-height 0.3s ease,
    margin 0.3s ease;
  max-height: 3rem;
  margin-bottom: 0.5rem;
  overflow: hidden;
}

.hidden-name {
  opacity: 0;
  visibility: hidden;
  max-height: 0;
  margin: 0;
}

#item-2 {
  background-color: #e5e5e5;
  grid-area: item-2;
  overflow-y: auto;
  height: calc(95vh - 4em);
  border-left: 1px solid #959baa;
  transition: all 0.3s ease;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: 1fr;
  grid-template-areas:
    "box0"
    "box1"
    "box2"
    "box3"
    "box4";
  gap: 1em;
  padding: 16px;
}

.box {
  border: 1px solid #adadad;
  background-color: #fffafa;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  height: 20rem;
}

#box-0,
#box-1 {
  height: auto;
}

#box-0 {
  grid-area: box0;
}
#box-1 {
  grid-area: box1;
}
#box-2 {
  grid-area: box2;
}
#box-3 {
  grid-area: box3;
}
#box-4 {
  grid-area: box4;
}

.cards {
  display: grid;
  grid-template-columns: 15em 1fr;
  grid-template-areas: "card-1 card-2";
  gap: 1em;
  padding: 16px;
}

.card {
  border: 1px solid #adadad;
  background-color: #fffafa;
  border-radius: 12px;
  height: 20rem;
}

#card-1 {
  grid-area: card-1;
}
#card-2 {
  grid-area: card-2;
  height: auto;
  overflow: hidden;
}

p {
  font-weight: 600;
  font-size: medium;
}

.inputs {
  margin: 1rem;
}

.separator {
  border-bottom: 1px solid #708090;
}

.flat-quiz-table-container {
  margin: 1.5rem 0;
  font-family: "Inter", "Roboto", -apple-system, BlinkMacSystemFont, sans-serif;
  width: 100%;
  overflow-x: scroll;
}

.flat-quiz-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  text-align: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  overflow: hidden;
}

.flat-quiz-table th,
.flat-quiz-table td {
  padding: 8px;
  border: none;
  white-space: nowrap;
}

.quiz-header,
.periods-header {
  background-color: #f3f4f6;
  color: #374151;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.period-row th {
  background-color: #f9fafb;
  color: #6b7280;
  font-weight: 500;
  font-size: 14px;
}

.exam-row:nth-child(odd) {
  background-color: #ffffff;
}

.exam-row:nth-child(even) {
  background-color: #f9fafb;
}

.exam-row:hover {
  background-color: #f3f4f6;
}

.exam-type {
  text-align: center;
  color: #4b5563;
  font-weight: 500;
}

.flat-input {
  width: 4em;
  padding: 8px 10px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  background-color: #ffffff;
  color: #1f2937;
  font-size: 14px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.flat-input:focus {
  border-color: #3b82f6;
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
}

.flat-input::placeholder {
  color: #9ca3af;
}

@media (max-width: 768px) {
  .flat-quiz-table {
    font-size: 13px;
  }

  .flat-quiz-table th,
  .flat-quiz-table td {
    padding: 8px 6px;
  }

  .flat-input {
    padding: 6px 8px;
  }
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .login-container {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "item-0 item-0"
      "item-1 item-1"
      "item-2 item-2";
  }

  #item-0.collapsed {
    width: 100%;
    height: 4em;
    display: flex;
    flex-direction: row;
  }

  .sidebar-collapsed {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 4em auto auto;
  }

  #item-0.collapsed .button-container {
    flex-direction: row;
    overflow-x: auto;
  }

  #item-0.collapsed .logo {
    display: none;
  }
}

@media (max-width: 480px) {
  .login-container {
    grid-template-columns: 1fr;
    grid-template-areas:
      "item-0"
      "item-1"
      "item-2";
  }
}
</style>
