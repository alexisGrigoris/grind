   //GETS DAYS' BUTTONS FEED
   function getDaysBtns() {
    for ( let i = 1; i < 32; i++) {
      document.getElementById(
        "btns-container"
      ).innerHTML += `<!--DAY ${i} -->

<!--DAY ${i}  EXPIRED-->
<div class="btn-expired" id="btn-expired-${i}">
<div class="btn-expired-no" id="btn-expired-no-$">${i}
</div>
</div> <div class="expired-msg" id="expired-msg-${i}">Η συγκεκριμενη προσφορα εχει ληξει. Δες παρακατω για νεες διαθεσιμες προσφορες!  </div>

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
    for ( let i = 1; i < 32; i++) {
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

  function getExpiredBtns() {
    for ( let i = 1; i < 32; i++) {
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
    for ( let i = 1; i < 32; i++) {
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
    for ( let i = 1; i < 32; i++) {
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
    for ( let i = 1; i < 32; i++) {
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
  // DISPLAY EXPIRED MSG
  function getExpiredBtnsMsg() {
    for (let i = 1; i < 32; i++) {
      (function (index) {
        document
          .getElementById("btn-expired-" + index)
          .addEventListener("mouseenter", function () {
            document
              .getElementById("expired-msg-" + index)
              .classList.add("show");
          });

        document
          .getElementById("btn-expired-" + index)
          .addEventListener("mouseleave", function () {
            document
              .getElementById("expired-msg-" + index)
              .classList.remove("show");
          });
      })(i);
    }
  }

  getExpiredBtnsMsg();

  /*       DISPLAY MODAL      */
  function renderModal() {
    for (let i = 1; i < 32; i++) {
      document
        .getElementById("btn" + [i])
        .addEventListener("click", function () {
          document.getElementById("modal" + [i]).style.display = "block";
          document.getElementById("island").classList.add("blur");
          document.body.style.overflow = "hidden";
        });
      document
        .getElementById("modal-close-btn" + [i])
        .addEventListener("click", function () {
          document.getElementById("modal" + [i]).style.display = "none";
          document.getElementById("island").classList.remove("blur");
          document.body.style.overflow = "visible";
        });
    }
  }
  renderModal();

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
    for ( let i = 1; i < 32; i++) {
      if (event.target == document.getElementById("modal" + [i])) {
        document.getElementById("modal" + [i]).style.display = "none";
        document.getElementById("island").classList.remove("blur");
        document.body.style.overflow = "visible";

      }
    }
  };