      //GETS DAYS' BUTTONS FEED
      function getDaysBtns() {
        for (i = 1; i < 13; i++) {
          document.getElementById(
            "btns-container"
          ).innerHTML += `<!--DAY ${i} -->

<!--DAY ${i}  EXPIRED-->
<div class="btn-expired" id="btn-expired-${i}">
  <div class="btn-expired-no">${i}</div>
</div>
<!--DAY ${i}  ACTIVE-->

<div
  summer=""
  class="wbq--map__l flex-col flex-center wbq--map__l${i}"
  id="btn${i}"
>
  <div summer="" class="wbq--map__l--text">${i}</div>
</div>

<!--DAY ${i}  LOCKED-->

<div class="locked-ice gentle-hover-shake" id="locked-ice-${i}">
  <div class="locked-ice-no">${i}</div>
</div>
        `;
        }
      }
      getDaysBtns();

      //GETS DAY'S MODAL FEED
      function getDaysModal() {
        for (i = 1; i < 13; i++) {
          document.getElementById(
            "modals-container"
          ).innerHTML += `<div class="modal" id="modal${[i]}">
      <div class="modal-inner" id="modal-inner">
        <div class="close-modal-btn-container">
          <button class="modal-close-btn" id="modal-close-btn${[i]}">X</button>
        </div>
        <div class="prosfora-title">${[i]}/08</div>
        <div class="modal-text" id="modal-text"></div>
        <div class="prosfora">
          <div class="prosfora-subtitle">1. Log 'n Spin</div>
          <div class="prosfora-text">
            5 free spins σε περιμένουν στο Wild Chapo 2!
          </div>

          <div class="prosfora-subtitle">Πάρε τo Bonus Rounds!</div>
          <div class="prosfora-text">
            Κάνε δικά σου επιπλέον 40 free spins στο ίδιο παιχνίδι με την
            τοποθετηση πονταρισμάτων αξίας 50€ στα slots της Relax Gaming!
          </div>

          <div class="prosfora-subtitle">3. 5 Golden Chips για όλους</div>
          <div class="prosfora-text">
            Συνδέσου σήμερα από τις 18:00 έως τις 23:59 στο παιχνίδι Mega Fire
            Blaze Roulette και παίξε τα chips σου!
          </div>
        </div>
        <div class="modal-choice-btns" id="modal-choice-btns">
          <button class="modal-btn" type="submit" id="accept-btn${[i]}">
            Το Θέλω!
          </button>
        </div>
      </div>
    </div>
        `;
        }
      }
      getDaysModal();

      document.getElementById("btn7").classList.add("glow");
      //MAKES TODAYS MODAL ACTIVE
      function getExpiredBtns() {
        for (i = 1; i < 13; i++) {
          if (
            document.getElementById("btn" + [i]).textContent <
            new Date().getDate()
          ) {
            document.getElementById("btn" + [i]).style.display = "none";
            document.getElementById("locked-ice-" + [i]).style.display = "none";
            document.getElementById("btn-expired-" + [i]).style.display =
              "block";
          }
        }
      }

      function getActiveBtns() {
        for (i = 1; i < 13; i++) {
          if (
            document.getElementById("btn" + [i]).textContent ==
            new Date().getDate()
          ) {
            document.getElementById("btn" + [i]).style.display = "block";
            document.getElementById("btn" + [i]).classList.add("glow");
            document.getElementById("locked-ice-" + [i]).style.display = "none";
            document.getElementById("btn-expired-" + [i]).style.display =
              "none";
          }
        }
      }

      function getNextDaysBtn() {
        for (i = 1; i < 13; i++) {
          if (
            parseInt(document.getElementById("btn" + [i]).textContent) - 1 ==
            new Date().getDate()
          ) {
            document.getElementById("btn" + [i]).style.display = "block";
            document.getElementById("locked-ice-" + [i]).style.display = "none";
            document.getElementById("btn-expired-" + [i]).style.display =
              "none";
          }
        }
      }

      function getLockedBtns() {
        for (i = 1; i < 13; i++) {
          if (
            parseInt(document.getElementById("btn" + [i]).textContent) - 1 >
            new Date().getDate()
          ) {
            document.getElementById("btn" + [i]).style.display = "none";
            document.getElementById("locked-ice-" + [i]).style.display =
              "block";
            document.getElementById("btn-expired-" + [i]).style.display =
              "none";
          }
        }
      }

      getExpiredBtns();
      getActiveBtns();
      getNextDaysBtn();
      getLockedBtns();
      /*   
      
      if (parseInt(document.getElementById("btn1").textContent) + 3 == new Date().getDate()) {
        document.getElementById("btn1").style.display = "block";
      } */

      if (document.getElementById("btn4").textContent < new Date().getDate()) {
        document.getElementById("btn4").style.display = "none";
        document.getElementById("locked-ice-4").style.display = "block";
      }

      /*       DISPLAY MODAL      */
      /* DAY 4 */
      document.getElementById("btn4").addEventListener("click", function () {
        document.getElementById("modal4").style.display = "block";
        document.getElementById("island").classList.add("blur");
        document.getElementById("sum-cal").classList.add("no-scroll");
      });
      document
        .getElementById("modal-close-btn4")
        .addEventListener("click", function () {
          document.getElementById("modal4").style.display = "none";
          document.getElementById("island").classList.remove("blur");
          document.body.classList.remove("no-scroll");
        });

      /* DAY 5 */
      document.getElementById("btn5").addEventListener("click", function () {
        document.getElementById("modal5").style.display = "block";
        document.getElementById("island").classList.add("blur");
        document.body.classList.add("no-scroll");
      });
      document
        .getElementById("modal-close-btn5")
        .addEventListener("click", function () {
          document.getElementById("modal5").style.display = "none";
          document.getElementById("island").classList.remove("blur");
          document.body.classList.remove("no-scroll");
        });

      /* DAY 6 */
      document.getElementById("btn6").addEventListener("click", function () {
        document.getElementById("modal6").style.display = "block";
        document.getElementById("island").classList.add("blur");
        document.body.classList.add("no-scroll");
      });
      document
        .getElementById("modal-close-btn6")
        .addEventListener("click", function () {
          document.getElementById("modal6").style.display = "none";
          document.getElementById("island").classList.remove("blur");
          document.body.classList.remove("no-scroll");
        });

      /* DAY 7 */
      document.getElementById("btn7").addEventListener("click", function () {
        document.getElementById("modal7").style.display = "block";
        document.getElementById("island").classList.add("blur");
        document.getElementById("sum-cal").classList.add("no-scroll");
      });
      document
        .getElementById("modal-close-btn7")
        .addEventListener("click", function () {
          document.getElementById("modal7").style.display = "none";
          document.getElementById("island").classList.remove("blur");
          document.body.classList.remove("no-scroll");
        });

      /* DAY 8 */
      document.getElementById("btn8").addEventListener("click", function () {
        document.getElementById("modal8").style.display = "block";
        document.getElementById("island").classList.add("blur");
        document.body.classList.add("no-scroll");
      });
      document
        .getElementById("modal-close-btn8")
        .addEventListener("click", function () {
          document.getElementById("modal8").style.display = "none";
          document.getElementById("island").classList.remove("blur");
          document.body.classList.remove("no-scroll");
        });

      /* ACCORDION */

      for (
        let i = 1;
        i <= document.getElementsByClassName("accordion").length;
        i++
      ) {
        document
          .getElementById("accordion")
          .addEventListener("click", function () {
            

            if (document.getElementById("panel").style.display === "block") {
              document.getElementById("accordion").innerHTML =
                "<div class='oroi-title'>▶ Όροι & Προϋποθέσεις</div>";
              document.getElementById("panel").style.display = "none";
            } else {
              document.getElementById("accordion").innerHTML =
                "<div class='oroi-title'>▼ Όροι & Προϋποθέσεις</div>";
              document.getElementById("panel").style.display = "block";
            }
          });
      }

      window.onclick = function (event) {
        for (i = 1; i < 13; i++) {
          if (event.target == document.getElementById("modal" + [i])) {
            document.getElementById("modal" + [i]).style.display = "none";
            document.getElementById("island").classList.remove("blur");
          }
        }
      };