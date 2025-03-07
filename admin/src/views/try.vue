<!-- @format -->

<template>
  <div id="card-2" class="card">
    <div class="inputs">
      <p>Student Profile</p>
      <div class="separator"></div>

      <!-- Quiz Section -->
      <p>Quiz</p>
      <div class="separator">
        <div class="flat-quiz-table-container">
          <div class="controls-container">
            <button class="control-button" @click="toggleScoreFormat('quiz')">
              <span class="button-label">Score Format:</span>
              <span class="button-value">{{
                sectionFormats.quiz === "outOf"
                  ? "Out of (10/50)"
                  : "Points (20)"
              }}</span>
            </button>
            <button class="control-button" @click="addPeriod('quiz')">
              <span class="button-label">Add Period</span>
            </button>
          </div>

          <table class="flat-quiz-table">
            <thead>
              <tr>
                <th rowspan="2" class="quiz-header">Quiz</th>
                <th
                  :colspan="sectionPeriods.quiz.length"
                  class="periods-header">
                  Grading Periods
                </th>
              </tr>
              <tr class="period-row">
                <th
                  v-for="(period, index) in sectionPeriods.quiz"
                  :key="`quiz-period-${index}`"
                  class="period-cell">
                  {{ period }}
                  <span
                    class="remove-period"
                    @click="removePeriod('quiz', index)"
                    v-if="
                      sectionPeriods.quiz.length > 1 &&
                      index === sectionPeriods.quiz.length - 1
                    "
                    >&times;</span
                  >
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(exam, examIndex) in examTypes"
                :key="`quiz-exam-${examIndex}`"
                class="exam-row">
                <td class="exam-type">{{ exam }}</td>
                <td
                  v-for="(period, periodIndex) in sectionPeriods.quiz"
                  :key="`quiz-cell-${examIndex}-${periodIndex}`"
                  class="input-cell">
                  <div
                    class="score-input-container"
                    :class="{
                      'points-format': sectionFormats.quiz === 'points',
                    }">
                    <input
                      type="text"
                      class="flat-input score-input"
                      v-model="sectionScores.quiz[examIndex][periodIndex].score"
                      @input="
                        validateInput(
                          $event,
                          'quiz',
                          examIndex,
                          periodIndex,
                          'score'
                        )
                      "
                      placeholder="Score" />
                    <template v-if="sectionFormats.quiz === 'outOf'">
                      <span class="score-separator">/</span>
                      <input
                        type="text"
                        class="flat-input total-input"
                        v-model="
                          sectionScores.quiz[examIndex][periodIndex].total
                        "
                        @input="
                          validateInput(
                            $event,
                            'quiz',
                            examIndex,
                            periodIndex,
                            'total'
                          )
                        "
                        placeholder="Total" />
                    </template>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Recitation Section -->
      <p>Recitation</p>
      <div class="separator">
        <div class="flat-quiz-table-container">
          <div class="controls-container">
            <button
              class="control-button"
              @click="toggleScoreFormat('recitation')">
              <span class="button-label">Score Format:</span>
              <span class="button-value">{{
                sectionFormats.recitation === "outOf"
                  ? "Out of (10/50)"
                  : "Points (20)"
              }}</span>
            </button>
            <button class="control-button" @click="addPeriod('recitation')">
              <span class="button-label">Add Period</span>
            </button>
          </div>

          <table class="flat-quiz-table">
            <thead>
              <tr>
                <th rowspan="2" class="quiz-header">Recitation</th>
                <th
                  :colspan="sectionPeriods.recitation.length"
                  class="periods-header">
                  Grading Periods
                </th>
              </tr>
              <tr class="period-row">
                <th
                  v-for="(period, index) in sectionPeriods.recitation"
                  :key="`recitation-period-${index}`"
                  class="period-cell">
                  {{ period }}
                  <span
                    class="remove-period"
                    @click="removePeriod('recitation', index)"
                    v-if="
                      sectionPeriods.recitation.length > 1 &&
                      index === sectionPeriods.recitation.length - 1
                    "
                    >&times;</span
                  >
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(exam, examIndex) in examTypes"
                :key="`recitation-exam-${examIndex}`"
                class="exam-row">
                <td class="exam-type">{{ exam }}</td>
                <td
                  v-for="(period, periodIndex) in sectionPeriods.recitation"
                  :key="`recitation-cell-${examIndex}-${periodIndex}`"
                  class="input-cell">
                  <div
                    class="score-input-container"
                    :class="{
                      'points-format': sectionFormats.recitation === 'points',
                    }">
                    <input
                      type="text"
                      class="flat-input score-input"
                      v-model="
                        sectionScores.recitation[examIndex][periodIndex].score
                      "
                      @input="
                        validateInput(
                          $event,
                          'recitation',
                          examIndex,
                          periodIndex,
                          'score'
                        )
                      "
                      placeholder="Score" />
                    <template v-if="sectionFormats.recitation === 'outOf'">
                      <span class="score-separator">/</span>
                      <input
                        type="text"
                        class="flat-input total-input"
                        v-model="
                          sectionScores.recitation[examIndex][periodIndex].total
                        "
                        @input="
                          validateInput(
                            $event,
                            'recitation',
                            examIndex,
                            periodIndex,
                            'total'
                          )
                        "
                        placeholder="Total" />
                    </template>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Summative Section -->
      <p>Summative</p>
      <div class="separator">
        <div class="flat-quiz-table-container">
          <div class="controls-container">
            <button
              class="control-button"
              @click="toggleScoreFormat('summative')">
              <span class="button-label">Score Format:</span>
              <span class="button-value">{{
                sectionFormats.summative === "outOf"
                  ? "Out of (10/50)"
                  : "Points (20)"
              }}</span>
            </button>
            <button class="control-button" @click="addPeriod('summative')">
              <span class="button-label">Add Period</span>
            </button>
          </div>

          <table class="flat-quiz-table">
            <thead>
              <tr>
                <th rowspan="2" class="quiz-header">Summative</th>
                <th
                  :colspan="sectionPeriods.summative.length"
                  class="periods-header">
                  Grading Periods
                </th>
              </tr>
              <tr class="period-row">
                <th
                  v-for="(period, index) in sectionPeriods.summative"
                  :key="`summative-period-${index}`"
                  class="period-cell">
                  {{ period }}
                  <span
                    class="remove-period"
                    @click="removePeriod('summative', index)"
                    v-if="
                      sectionPeriods.summative.length > 1 &&
                      index === sectionPeriods.summative.length - 1
                    "
                    >&times;</span
                  >
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(exam, examIndex) in examTypes"
                :key="`summative-exam-${examIndex}`"
                class="exam-row">
                <td class="exam-type">{{ exam }}</td>
                <td
                  v-for="(period, periodIndex) in sectionPeriods.summative"
                  :key="`summative-cell-${examIndex}-${periodIndex}`"
                  class="input-cell">
                  <div
                    class="score-input-container"
                    :class="{
                      'points-format': sectionFormats.summative === 'points',
                    }">
                    <input
                      type="text"
                      class="flat-input score-input"
                      v-model="
                        sectionScores.summative[examIndex][periodIndex].score
                      "
                      @input="
                        validateInput(
                          $event,
                          'summative',
                          examIndex,
                          periodIndex,
                          'score'
                        )
                      "
                      placeholder="Score" />
                    <template v-if="sectionFormats.summative === 'outOf'">
                      <span class="score-separator">/</span>
                      <input
                        type="text"
                        class="flat-input total-input"
                        v-model="
                          sectionScores.summative[examIndex][periodIndex].total
                        "
                        @input="
                          validateInput(
                            $event,
                            'summative',
                            examIndex,
                            periodIndex,
                            'total'
                          )
                        "
                        placeholder="Total" />
                    </template>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Project Section -->
      <p>Project</p>
      <div class="separator">
        <div class="flat-quiz-table-container">
          <div class="controls-container">
            <button
              class="control-button"
              @click="toggleScoreFormat('project')">
              <span class="button-label">Score Format:</span>
              <span class="button-value">{{
                sectionFormats.project === "outOf"
                  ? "Out of (10/50)"
                  : "Points (20)"
              }}</span>
            </button>
            <button class="control-button" @click="addPeriod('project')">
              <span class="button-label">Add Period</span>
            </button>
          </div>

          <table class="flat-quiz-table">
            <thead>
              <tr>
                <th rowspan="2" class="quiz-header">Project</th>
                <th
                  :colspan="sectionPeriods.project.length"
                  class="periods-header">
                  Grading Periods
                </th>
              </tr>
              <tr class="period-row">
                <th
                  v-for="(period, index) in sectionPeriods.project"
                  :key="`project-period-${index}`"
                  class="period-cell">
                  {{ period }}
                  <span
                    class="remove-period"
                    @click="removePeriod('project', index)"
                    v-if="
                      sectionPeriods.project.length > 1 &&
                      index === sectionPeriods.project.length - 1
                    "
                    >&times;</span
                  >
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(exam, examIndex) in examTypes"
                :key="`project-exam-${examIndex}`"
                class="exam-row">
                <td class="exam-type">{{ exam }}</td>
                <td
                  v-for="(period, periodIndex) in sectionPeriods.project"
                  :key="`project-cell-${examIndex}-${periodIndex}`"
                  class="input-cell">
                  <div
                    class="score-input-container"
                    :class="{
                      'points-format': sectionFormats.project === 'points',
                    }">
                    <input
                      type="text"
                      class="flat-input score-input"
                      v-model="
                        sectionScores.project[examIndex][periodIndex].score
                      "
                      @input="
                        validateInput(
                          $event,
                          'project',
                          examIndex,
                          periodIndex,
                          'score'
                        )
                      "
                      placeholder="Score" />
                    <template v-if="sectionFormats.project === 'outOf'">
                      <span class="score-separator">/</span>
                      <input
                        type="text"
                        class="flat-input total-input"
                        v-model="
                          sectionScores.project[examIndex][periodIndex].total
                        "
                        @input="
                          validateInput(
                            $event,
                            'project',
                            examIndex,
                            periodIndex,
                            'total'
                          )
                        "
                        placeholder="Total" />
                    </template>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Exam Section -->
      <p>Exam</p>
      <div class="separator">
        <div class="flat-quiz-table-container">
          <div class="controls-container">
            <button class="control-button" @click="toggleScoreFormat('exam')">
              <span class="button-label">Score Format:</span>
              <span class="button-value">{{
                sectionFormats.exam === "outOf"
                  ? "Out of (10/50)"
                  : "Points (20)"
              }}</span>
            </button>
            <button class="control-button" @click="addPeriod('exam')">
              <span class="button-label">Add Period</span>
            </button>
          </div>

          <table class="flat-quiz-table">
            <thead>
              <tr>
                <th rowspan="2" class="quiz-header">Exam</th>
                <th
                  :colspan="sectionPeriods.exam.length"
                  class="periods-header">
                  Grading Periods
                </th>
              </tr>
              <tr class="period-row">
                <th
                  v-for="(period, index) in sectionPeriods.exam"
                  :key="`exam-period-${index}`"
                  class="period-cell">
                  {{ period }}
                  <span
                    class="remove-period"
                    @click="removePeriod('exam', index)"
                    v-if="
                      sectionPeriods.exam.length > 1 &&
                      index === sectionPeriods.exam.length - 1
                    "
                    >&times;</span
                  >
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(exam, examIndex) in examTypes"
                :key="`exam-exam-${examIndex}`"
                class="exam-row">
                <td class="exam-type">{{ exam }}</td>
                <td
                  v-for="(period, periodIndex) in sectionPeriods.exam"
                  :key="`exam-cell-${examIndex}-${periodIndex}`"
                  class="input-cell">
                  <div
                    class="score-input-container"
                    :class="{
                      'points-format': sectionFormats.exam === 'points',
                    }">
                    <input
                      type="text"
                      class="flat-input score-input"
                      v-model="sectionScores.exam[examIndex][periodIndex].score"
                      @input="
                        validateInput(
                          $event,
                          'exam',
                          examIndex,
                          periodIndex,
                          'score'
                        )
                      "
                      placeholder="Score" />
                    <template v-if="sectionFormats.exam === 'outOf'">
                      <span class="score-separator">/</span>
                      <input
                        type="text"
                        class="flat-input total-input"
                        v-model="
                          sectionScores.exam[examIndex][periodIndex].total
                        "
                        @input="
                          validateInput(
                            $event,
                            'exam',
                            examIndex,
                            periodIndex,
                            'total'
                          )
                        "
                        placeholder="Total" />
                    </template>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentProfileCard",
  data() {
    return {
      examTypes: ["Prelims", "Mid-Term", "Semi-Finals", "Finals"],

      // Define sections
      sections: ["quiz", "recitation", "summative", "project", "exam"],

      // Format for each section
      sectionFormats: {
        quiz: "outOf",
        recitation: "outOf",
        summative: "outOf",
        project: "outOf",
        exam: "outOf",
      },

      // Periods for each section
      sectionPeriods: {
        quiz: ["1st", "2nd", "3rd", "4th", "5th", "6th"],
        recitation: ["1st", "2nd", "3rd", "4th", "5th", "6th"],
        summative: ["1st", "2nd", "3rd", "4th", "5th", "6th"],
        project: ["1st", "2nd", "3rd", "4th", "5th", "6th"],
        exam: ["1st", "2nd", "3rd", "4th", "5th", "6th"],
      },

      // Scores for each section
      sectionScores: {
        quiz: [],
        recitation: [],
        summative: [],
        project: [],
        exam: [],
      },
    };
  },
  created() {
    // Initialize scores for all sections
    this.sections.forEach((section) => {
      this.initializeScores(section);
    });
  },
  methods: {
    initializeScores(section) {
      this.sectionScores[section] = Array(this.examTypes.length)
        .fill()
        .map(() =>
          Array(this.sectionPeriods[section].length)
            .fill()
            .map(() => ({
              score: "",
              total: "100",
              // Store the original value to preserve it when toggling
              originalScore: "",
              originalTotal: "100",
            }))
        );
    },

    validateInput(event, section, examIndex, periodIndex, field) {
      const value = event.target.value;
      if (value && !/^\d*\.?\d*$/.test(value)) {
        this.sectionScores[section][examIndex][periodIndex][field] =
          this.sectionScores[section][examIndex][periodIndex][field].replace(
            /[^\d.]/g,
            ""
          );
      }

      // Update the original value when it changes
      this.sectionScores[section][examIndex][periodIndex][
        `original${field.charAt(0).toUpperCase() + field.slice(1)}`
      ] = this.sectionScores[section][examIndex][periodIndex][field];
    },

    toggleScoreFormat(section) {
      const newFormat =
        this.sectionFormats[section] === "outOf" ? "points" : "outOf";

      // Preserve all entered values when toggling formats
      this.examTypes.forEach((_, examIndex) => {
        this.sectionPeriods[section].forEach((_, periodIndex) => {
          const cellData = this.sectionScores[section][examIndex][periodIndex];

          // Store original values before toggling
          if (cellData) {
            // When switching from outOf to points, no conversion needed
            // When switching from points to outOf, ensure total is available
            if (
              this.sectionFormats[section] === "points" &&
              newFormat === "outOf"
            ) {
              // Make sure total is set (default to 100 if not previously set)
              if (!cellData.originalTotal) {
                cellData.originalTotal = "100";
              }
              cellData.total = cellData.originalTotal;
            }
          }
        });
      });

      this.sectionFormats[section] = newFormat;
    },

    addPeriod(section) {
      const newPeriodNum = this.sectionPeriods[section].length + 1;
      let suffix = "th";
      if (newPeriodNum === 1) suffix = "st";
      else if (newPeriodNum === 2) suffix = "nd";
      else if (newPeriodNum === 3) suffix = "rd";

      this.sectionPeriods[section].push(newPeriodNum + suffix);

      // Add a new column of scores for each exam type
      this.examTypes.forEach((_, examIndex) => {
        if (!this.sectionScores[section][examIndex]) {
          this.sectionScores[section][examIndex] = [];
        }
        this.sectionScores[section][examIndex].push({
          score: "",
          total: "100",
          originalScore: "",
          originalTotal: "100",
        });
      });
    },

    removePeriod(section, index) {
      // Only allow removing the last period (right to left)
      if (
        this.sectionPeriods[section].length > 1 &&
        index === this.sectionPeriods[section].length - 1
      ) {
        this.sectionPeriods[section].splice(index, 1);

        // Remove the corresponding scores
        this.examTypes.forEach((_, examIndex) => {
          this.sectionScores[section][examIndex].splice(index, 1);
        });
      }
    },

    getAllScores() {
      // Return a clean version of all scores data
      const result = {};

      this.sections.forEach((section) => {
        result[section] = {
          examTypes: this.examTypes,
          periods: this.sectionPeriods[section],
          scores: this.sectionScores[section].map((examScores) =>
            examScores.map((periodScore) => ({
              score: periodScore.score,
              total: periodScore.total,
            }))
          ),
          format: this.sectionFormats[section],
        };
      });

      return result;
    },
  },
};
</script>

<style scoped>
.card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  padding: 20px;
  margin-bottom: 20px;
}

.inputs p {
  font-weight: 600;
  color: #4b5563;
  margin-bottom: 10px;
  margin-top: 20px;
}

.inputs p:first-child {
  margin-top: 0;
}

.separator {
  margin-bottom: 24px;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 16px;
}

.separator:last-child {
  border-bottom: none;
}

/* Table styles from original component */
.flat-quiz-table-container {
  margin: 1.5rem 0;
  font-family: "Inter", "Roboto", -apple-system, BlinkMacSystemFont, sans-serif;
  width: 100%;
  overflow-x: scroll;
}

.controls-container {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.control-button {
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
}

.button-label {
  font-weight: 500;
}

.button-value {
  color: #3b82f6;
  font-weight: 600;
}

.control-button:hover {
  background-color: #e5e7eb;
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
  padding: 12px;
  border: none;
}

/* Header styling */
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
  position: relative;
}

.remove-period {
  position: absolute;
  top: 4px;
  right: 4px;
  font-size: 16px;
  color: #9ca3af;
  cursor: pointer;
  display: none;
}

.period-cell:hover .remove-period {
  display: inline;
}

/* Row styling */
.exam-row:nth-child(odd) {
  background-color: #ffffff;
}

.exam-row:nth-child(even) {
  background-color: #f9fafb;
}

.exam-type {
  text-align: left;
  color: #4b5563;
  font-weight: 500;
}

/* Input styling */
.score-input-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
}

.score-input-container.points-format .score-input {
  width: 100%;
}

.flat-input {
  padding: 8px 10px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  background-color: #ffffff;
  color: #1f2937;
  font-size: 14px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.score-input {
  width: 50%;
}

.total-input {
  width: 50%;
}

.score-separator {
  font-weight: bold;
  color: #6b7280;
}

.flat-input:focus {
  border-color: #3b82f6;
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
}

.flat-input::placeholder {
  color: #9ca3af;
}

/* Hover effects */
.exam-row:hover {
  background-color: #f3f4f6;
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

  .controls-container {
    flex-direction: column;
  }
}
</style>
