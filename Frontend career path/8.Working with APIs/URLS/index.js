let postsArray = []
const titleInput = document.getElementById("post-title")
const bodyInput = document.getElementById("post-body")
const form = document.getElementById("new-post")

function renderPosts() {
    let html = ""
    for (let post of postsArray) {
        html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />
        `
    }
    document.getElementById("blog-list").innerHTML = html
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postsArray = data.slice(0, 5)
        renderPosts()
    })

form.addEventListener("submit", function(e) {
    e.preventDefault()
    const postTitle = titleInput.value
    const postBody = bodyInput.value
    const data = {
        title: postTitle,
        body: postBody
    }
    
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }
    
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        .then(post => {
            postsArray.unshift(post)
            renderPosts()
            // titleInput.value = ""
            // bodyInput.value = ""
            form.reset() // Some browsers might not support this choice of clearing the input
        })
})

/*  	Cyber attacks against control systems 
(Extended abstract)
 
 
 
 
Student name (Student code): Alexis Grigoris (s371963) 
Professor – Supervisor name : Dr. Lothar Fritsch 
FALL 2023  
 
 


 
 

 
Contents
Introduction	3
Methodology	4
Results	4
Discussion	4
Conclusion	4
References	4

 

 
https://pdf.sciencedirectassets.com/277415/1-s2.0-S1874548209X0003X/1-s2.0-S1874548209000213/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLWVhc3QtMSJHMEUCIQDn0TfYaOE%2FSPlucoSC1FRcnWLbM4x%2FeCKoDCSJyyEQ%2BAIgAuk4%2Bmc1V5KuA4zmLbcuZ1cprgN%2BmH5QFngM7O%2B9dKcqswUIYBAFGgwwNTkwMDM1NDY4NjUiDCKQDo8CuccQzjKyFSqQBVqZUaCz9VbDxK2FmfdHcajGbElFOHJj5N9PytV67PpB7vm7sNPE3wEQ0KOEmBPSBWOTmXJxUGNy%2Bq51Qtb5rGIK6nJJ%2FbxztUPWvhTNGXZPNCFiw1pjbMsBV8NVdek9zwxhCv6ijhX6sfmYgIDMRzsjppIeeJNIF2GC%2BLxpn%2BJAHoZs06lB%2BPievgnB9xK4iRSF9z3I7kdVucyGmAyu28S%2B5tFasPyyOj%2BlW6w1N2hzbkBiZGbHJiXpTSa6waa6DIy4%2BHGO2xRPSbiy6VxCOb0Fwjvts%2B%2F1TS5uKGjWbyi3zl%2BBaYRww%2Fy%2Bm4k%2FqaPv5UgGAR52wVkMHzsDc4HniGQ4pqCyM8obsypYQ1NWMv9347C6bfj8%2Bbyw8E%2BLrykvlIhJ0pEl6yYQ5lDN1ed1egEYcyY4xNYvn1A0BPRYcdwHOUIR6HOsTH8aGT5b8B69G23tSFJii1I9%2BCiFp7nzln6tnhQgqK6Th8%2FnD4axi5IicpXdx8Juz9RdkWiH3wWi2dOkgOnJarYV03LSvDbRH4TuodbtzbxfKLSKY4zRmO7ILA%2FtQO8Ci4JLvSQ4B2B%2BX5%2BXWCtsNWodrZ2rBVwYS3nnDQoK%2F40UURW5X%2B5vU4eXMwtqB3Z1dUkDfxZtIQxKxKOqRyUXyG2tqs9Xixmnvu8tQDEUgpkdmKsac3aZgcG%2FLmaDX7l%2BmwjS%2FEhxfoDDKKbztnk6k5yBs970DoEvg56Uc4sb5vaGotlPJQXiCfQ2TDyCF%2BgShA%2Fo7cS7jU%2Bqiae5at6bTJnHFY6BJssUqTXbsH6%2BBKB%2BgovT5ZPQUzbaei50u1Y3wGkd3PDHFnP0r2hrLYX6kseg9f2CGUKTYtbeGfIQknq4MZNxLNFNHClaMOCyxqgGOrEBTgmmgLyXmGaHNvG%2BMy%2B7UBlkPCJPKoebbUr1BFsj%2F7z666wtPTlXy%2Bk77jqqEjDNDsprRX7qRENnMaUbYPM9weCduYjwDKB0kA9WeHsbPulIvC7RlWCZ0RoSKG2eKwR3X3W%2FEzZCOvlWDHo9%2BGoa7EzhSj1OPz32dzk81Xs7Nxn%2Ff%2F93et72dy%2B5MqC%2FxzVELB2q5HLpftOqQLX6p%2Fjt4IHd2M1zcGtaDtDY%2FVVrIQit&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230925T150925Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYQ4QTAXWH%2F20230925%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9da541dfa38d644b3ee63b5b0e103b8b764f7d51cda884907d36ee9d9595d28c&hash=645ba75b1db55d085e9571535779d405e9bccea65d702875981fa12ee3fceed2&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S1874548209000213&tid=spdf-42a8a841-da1b-4305-aa46-31ca00aab006&sid=2ff68f835b4f754db22bac91d7686dbc061bgxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=1d145a540656515f575700&rr=80c43029e8e3eea8&cc=gr
 
https://sci-hub.se/10.1145/1966913.1966959
https://ieeexplore.ieee.org/abstract/document/5530638
https://www.sciencedirect.com/science/article/pii/S1874548221000524
https://www.sciencedirect.com/science/article/pii/S0140366419319991
 https://link.springer.com/chapter/10.1007/978-3-642-00602-9_3
210
 https://www.ibm.com/topics/cyber-attack#:~:text=A%20cyberattack%20is%20any%20intentional,theft%20to%20acts%20of%20war.
Introduction 

The rapid evolution of technology has had a huge impact on people’s lives over the past years. Nowadays, modern society demands from people connectivity between them, friends, work, banks, businesses, hospitals, government, etc. At most jobs, an individual must install several applications to follow the company’s rules and boundaries. For example, most office jobs require a lot of apps like e-mail systems, task manager apps, authentication apps, etc. Even in a job that one would think technology is not needed that much, such as in construction, modern companies use tactics that make workers download apps where they will register how many hours they worked, and what they worked on and can include pictures of what they worked on as well. Apart from that, most companies use key tags/tokens so that their employees can enter the building which registers in a database the name of the key tag holder and the exact time they got in and out of work. This shows that technology and digital technology have a lot of benefits in people's lives as they solve problems that humans had years ago, but apart from all the benefits this digital world includes a lot of criminal activities starting from a small part of stolen data to huge damage and impact from actions that can hit the world’s largest industries, businesses and government as well. 

Using my older brother’s computer from a very young age I had encountered virus a couple of times, such as one time I got baited into a website I should not open and my computer would just display an image of  “Greek Police” claiming that I was involved  into several illegal activities, including a lot of legislation articles, and a bank account where I should deposit 1.000 – 10.000 euros to avoid jail. I was frightened at that time and went to a it technician shop where, the technician just formatted my PC and everything was ok. After this had happened, I understood that I should not trust and believe everything I find online. The second encounter with a cyber attack I had, was on April 2011 where hackers compromised personal information from around 80 million users and I probably was one of them. However, back at the time I did not take the matter seriously as I could not think of any great negative consequences someone that had my personal information could have.
From that day and on, I was paying attention more when listening  about cyber attacks on the news, or reading about them on the web and had interest in learning more about it without ever trying to make proper research or try to find out more than I was shown.
All of this damage is usually done by hackers. Hacking is a term that refers to someone modifying a system, application, or product in a way that his functionality is changed depending on the hacker’s goal. However, hacking as a term refers to fixing a problem as well (Pitts, 2017).  
Cyber attacks
Cyber attack is a term that refers to any attempt that someone does, so that he can disable services, destroy data, steal or expose information, change functionalities of systems, networks, applications and much more (Li, 2021).
There are a variety of motivations behind cyber attacks, as they can be executed for numerous reasons. A lot of times, Cyber attacks can be personally motivated, for revenge purposes for example where attackers usually aim to disable or disfunction the company’s systems, steal money or sensitive data. Apart from personally motivated cyber attacks, two other common types of attacks can be criminally motivated or politically motivated. Criminally motivated attacks are most usually executed for money as attackers, either hack bank accounts to transfer money to them, or can steal personal and sensitive data so that they can sell them and earn money. Finally, politically motivated attackers seek to launch cyberattacks against the government, and vital institutions, organizations and businesses (Gandhi, 2011).

Methodology 
Results 
Discussion 
Conclusion 
References
References
Gandhi, R., Sharma, A., Mahoney, W., Sousan, W., Zhu, Q., & Laplante, P. (2011). Dimensions of Cyber-Attacks: Cultural, Social, Economic, and Political. IEEE Technology and Society Magazine, 30(1), 28–38. https://doi.org/10.1109/mts.2011.940293
Li, Y., & Liu, Q. (2021). A Comprehensive Review Study of cyber-attacks and Cyber security; Emerging Trends and Recent Developments. Energy Reports, 7(7), 8176–8186. Sciencedirect. https://www.sciencedirect.com/science/article/pii/S2352484721007289
Pitts, V. (2017). Cyber crimes : history of world’s worst Cyber attacks. Alpha Editions (A Vij Publishing Group Company.
 */