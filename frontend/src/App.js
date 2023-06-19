import React, { useState, useCallback, useEffect } from 'react'
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import './App.css';

import 'reactflow/dist/style.css';
import './overview.css';

import { nodes as initialNodes, edges as initialEdges } from './initial_elements';

const minimapStyle = {
  height: 120,
};

const onInit = (reactFlowInstance) => console.log('flow loaded:', reactFlowInstance);

function App() {
  const [inputNotes, setInputNotes] = useState("");
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  const clusterThemes = [
    { clusterNum: 8, text: ' Autonomous Driving (AD) AI security research and the development of an open source evaluation platform called PASS to address the gap in scientific methodology.' },
    { clusterNum: 2, text: ' The authors analyze research papers related to semantic AI security in the context of autonomous driving, and identify scientific gaps and potential future directions.' },
    { clusterNum: 1, text: ' The security of Autonomous Driving (AD) AI stack and the need to study the security properties of downstream AI components.' },
    { clusterNum: 9, text: ' Autonomous Driving AI Research and Security' },
    { clusterNum: 7, text: ' Attacks on Autonomous Driving Systems' },
    { clusterNum: 5, text: 'The common theme among the key points is the various methods of hacking autonomous driving (AD) systems.' },
    { clusterNum: 4, text: ' Autonomous Driving (AD) AI Systems' },
    { clusterNum: 3, text: ' Improving the robustness of AI components against attacks through defense methods.' },
    { clusterNum: 0, text: ' The lack of system-level evaluation and defense solutions in Autonomous Driving (AD) AI security research, and the need for more research in this area.' },
    { clusterNum: 6, text: ' The benefits of open-sourcing efforts within the security community, and potential solutions to encourage open sourcing practices.' }
  ]

  const clusterSentences = [
    { clusterNum: 8, sentences: ['- Autonomous Driving (AD) systems rely on AI for safety and driving decisions, but these are vulnerable to adversarial attacks.', '- "Semantic AI security" is the term referred to the research that explores the implications of these attacks not just at the component level, but at the system-wide level.', '- Over the past five years, research in this field has grown and is now being performed to address these challenges in AD.', '- This paper aims to systematically organise this emerging research field by analysing 53 papers. It categorises them based on aspects like the AI component targeted, the goal of the attack or defence, attack vectors, defence robustness, and evaluation methodologies.', '- Six significant scientific gaps are identified and the paper provides potential future directions for research and design.', '- An open source evaluation platform called PASS has been developed to address the gap in scientific methodology.', '- While AI components are vulnerable to attacks, these don\'t necessarily result in system-level vulnerabilities due to the "semantic gaps" between system-level attack input and AI component level.'] },
    { clusterNum: 2, sentences: ['1. The text discusses the concept of semantic AI security, which addresses two general semantic gaps in artificial intelligence (AI). One is the system-to-AI semantic gap, also called the inverse-feature mapping problem. The second is the AI-to-system semantic gap, which involves mapping the impacts of AI component-level attacks to system-level impacts.', '2. In the context of autonomous driving (AD), an exponentially growing trend in the research to tackle the semantic AI security challenges has been noticed since 2019.', '3. Existing surveys on AD security did not focus on the semantic AI security challenges and their impacts on AD AI components.', '4. Given the safety-criticality of attacks in the AD context and the increase in research on the topic, the authors believe it is a good time to summarize the current status, trends, scientific gaps, insights, and future research directions.', '5. In total, 53 papers related to semantic AD AI security are collected and analyzed. These papers have been classified based on critical aspects for the security field like targeted AI component, attack/defence goals, vector, knowledge, deployability, robustness, and evaluation methodologies.', '6. Based on the systematization, six significant scientific gaps were identified. The authors suggest potential future directions not only at the design level but also at the research goal and methodology levels.'] },
    { clusterNum: 1, sentences: ['1. In autonomous driving (AD), L1 vehicles have the AD system in control of either steering or throttling/braking, while L2 vehicles have partial automation, where the AD system controls both.', '2. L1 and L2 vehicles still require active monitoring from the driver, but at levels L3 and above, driver attention is less necessary, and by levels L4 and L5, a driver seat is not required.', '3. At L4 and L5 levels, the systems operate differently; L4 AD systems only operate in limited Operational Design Domains (ODDs), but L5 systems can handle all potential driving scenarios.', "4. The AI components in AD systems include perception (understanding the surrounding environment), localization (finding the vehicle's position in the environment), prediction (estimating future statuses of surrounding objects), and planning (making driving decisions).", '5. The modular design is the current industry standard for AD systems due to its easier debugging, interpretation, and ability to hard-code safety rules/measures.', '6. Autonomous vehicles are susceptible to adversarial AI attacks, in which AI models are manipulated, raising concerns about system-level vulnerabilities.', '7. The paper focuses on exploring semantic AI security within the context of autonomous driving, with a view to addressing AI component-level vulnerabilities.'] },
    { clusterNum: 9, sentences: ['1. Majority of existing works (>86%) focus on perception, while localization, chassis, and end-to-end driving receive less or equal to 6.2% attention.', '2. The two most popular perception works are camera (60.0%) and LiDAR (21.5%) perception.', '3. None of the current works study downstream AI components such as prediction and planning.', '4. The semantic AD AI attacks are categorized based on 3 research aspects: Attack goal, attack vector, and attacker’s knowledge.', '5. Attack goals are further divided based on integrity, confidentiality, and availability. ', '6. Integrity in AD context refers to the integrity of AI component outputs; its violations can lead to safety hazards, traffic rule violations, and mobility degradation.', '7. Confidentiality is related to sensitive information from or collected by the AD vehicle.', "8. Availability in the AD context can be defined as an AI component's ability to provide timely and reliable outputs; this can be affected through attacks causing delays or failures in the outputting function."] },
    { clusterNum: 7, sentences: ['1. Most existing works on AI components in autonomous vehicle systems focus is on integrity (96.3%), with only 3.7% on confidentiality, and none on availability.', '2. Attacks on autonomous driving systems can be categorized into two groups: physical-layer and cyber-layer attacks.', '3. Physical-layer attacks involve tampering with the sensor inputs to the AI components physically, which can be further broken down into physical-world attacks and sensor attacks.', '4. Cyber-layer attacks require internal access to the autonomous driving system, its computation platform, or even its development environment.', '5. The object texture, in physical-world attack vectors, refers to changing the surface texture of 2D or 3D objects, which is frequently used in adversarial attacks.', '6. Multiple studies have been conducted in the field of AD AI attacks, targeting various aspects such as AI component integrity, object detection, camera perception, semantic segmentation, object tracking, LiDAR detection, and RADAR perception, among others. ', "7. The understanding and execution of these attacks depend on the attacker's knowledge ranging from white-box knowledge (complete knowledge of the system), to gray-box (partial knowledge), and black-box (no knowledge).", '8. The attack methods often involve patches, posters, and software compromises.'] },
    { clusterNum: 5, sentences: ["The text discusses various methods that hackers can use to attack autonomous driving (AD) systems. Some of these attacks aim at disguising objects or changing their appearance through camouflage or projectors. Examples include altering the appearance of stop signs, road surfaces, vehicles, and clothes. Other attacks focus on changing the shape or position of 3D objects, such as vehicles or traffic cones. Sensor attacks involve spoofing devices like LiDAR, RADAR, and GPS to cause them to produce false readings. Another attack vector is projecting laser or light directly onto the sensor to misguide object detection. Acoustic signals can also be used to disrupt the outputs of Inertial Measurement Units (IMUs). Hackers can also use ML backdoor methods and software compromises to manipulate the model's outputs or to infiltrate sensor data. The majority of attacks use physical-world attack vectors, with object texture alteration being the most common approach. Cyber-layer attack vectors are less commonly used in current hacking approaches."] },
    { clusterNum: 4, sentences: ['- The text discusses three attack settings on autonomous driving (AD) AI systems: white-box, gray-box, and black-box. In a white-box attack, the attacker has complete knowledge of the AD system; this is the most commonly adopted setting. Gray-box attacks assume that some information required for white-box attacks is unavailable, while black-box attacks are the most restrictive, with the attacker having no access to internal AD vehicle details. ', '- AD AI defense methods are categorized into two: consistency checking and adversarial robustness. Consistency checking cross-checks attacked information with other independent measurement sources or inherently unchanging properties of the information. Examples include using stereo cameras and prediction models to cross-check LiDAR object detection results, or checking if the current camera object detection results tally with the driving context. Adversarial robustness is another defense method but the text does not elaborate on this method.', '- The field has been evolving, with more studies focusing on gray-box and black-box settings, which are more challenging but practical.', '- Defense strategies are evaluated according to certain key factors: deployability, robustness to adaptive attacks, defense methods, and defense goals. The text provides a tabulated summary of various defense solutions, indicating whether they meet various evaluation criteria.'] },
    { clusterNum: 3, sentences: ['1. Robustness of the AI component against attacks is being improved through various defense methods such as adversarial training and predicting and removing potential adversarial perturbations.', '2. There are two main defense goals; detection and mitigation. Detection-based defenses focus on detecting attack attempts while mitigation strategies aim to improve adversarial robustness to reduce attack success rate. ', '3. Defense methods should be designed for practical deployment, focusing on aspects such as negligible timing overhead, negligible resource overhead, no model training, no additional dataset requirement, and no hardware modification. Current defenses lack awareness in areas like no model training and negligible resource overhead.', '4. Adaptive attacks, designed to circumvent specific defenses, have become a point of focus and calls for defenses that can withstand such attacks. They assume complete knowledge of the defense internals and directly challenge the fundamental assumptions of the defense. Existing defenses have yet to be thoroughly evaluated against such attacks.'] },
    { clusterNum: 0, sentences: ['1. Adversarial AI defenses are strongly advocated and guidelines exist for designing adaptive attacks. ', '2. Only 3 of the relevant studies include evaluations of adaptive attack (Nassi et al., Liu et al., and Sun et al.). ', "3. Most existing defenses in AD AI security don't evaluate against adaptive attacks. ", '4. Expected differences in evaluation methodologies exist due to different problem formulations. ', '5. Evaluation methodology could be either at the level of the AI component or the AD system, involving both AI component and AD system.', '6. Component-level evaluation looks at attack/defense impacts at the AI component level. ', '7. System-level evaluation considers the impacts at the vehicle driving behavior level and can be achieved via real vehicle-based or simulation-based setups. ', '8. Majority of surveyed works perform component-level evaluation while only about 25% adopt some form of system-level evaluation. ', '9. There is a call for attention to areas of identified scientific gaps in AD AI security and suggestions for future directions.'] },
    { clusterNum: 6, sentences: ['1. About 50% of ASR/SI papers in CPS, CV, and ML/AI security conferences release their code, highlighting a willingness to share, but the diversity of AD AI security papers may limit this practice.', '2. Security conference papers tend to use a diverse set of attack vectors, making code sharing difficult due to hardware design implications.', '3. Papers in the ASR/SI domain primarily use malicious sound waves for attacks, which are easier to modify and evaluate digitally.', '4. Encouraging open-sourcing efforts within the security community is beneficial for future research, although it is unclear how hardware implementations should be shared to benefit the community directly.', "5. Two potential solutions include open-source hardware implementation references and open-source attack modeling code, with the former involving the release of detailed hardware design information and the latter involving the digital modelling of an attack's capability.", '6. Open sourcing practices can be encouraged via community-level evaluation infrastructure development.'] },
  ]

  const edgesWithUpdatedTypes = edges.map((edge) => {
    if (edge.sourceHandle) {
      const edgeType = nodes.find((node) => node.type === 'custom').data.selects[edge.sourceHandle];
      edge.type = edgeType;
    }

    return edge;
  });

  const apiKey = '';
  const model = 'gpt-4-0613'

  const handleInputChange = (e) => {
    console.log(e.target.value)
    setInputNotes(e.target.value)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const output = await chatGPT('whats going on');
  }

  const chatGPT = async (text) => {
    try {
      const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          prompt: text,
          model,
          max_tokens: 1000
        })
      });

      const res = await response.json();
      console.log(res.choices[0].text)
      return res.choices[0].text
    } catch (err) {

    }
    return null
  }

  return (
    <div className="App">
      <div className="App-body">
        <p>mind map</p>
        <form onSubmit={handleFormSubmit}>
          <input type="text" className="custom-inputbox" value={inputNotes} onChange={handleInputChange} />
          <button className="custom-button" type="submit">Send</button>
        </form>
        <ReactFlow
          nodes={nodes}
          edges={edgesWithUpdatedTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={onInit}
          fitView
          attributionPosition="top-right"
        // nodeTypes={nodeTypes}
        >
          <MiniMap style={minimapStyle} zoomable pannable />
          <Controls />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </div>
    </div>
  );
}

export default App;
