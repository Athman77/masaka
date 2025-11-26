import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  pdf,
} from "@react-pdf/renderer";
import { ContractData } from "./ContractForm";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: "Helvetica",
    position: "relative",
  },
  watermark: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity: 0.05,
    width: 300,
    height: 300,
  },
  header: {
    textAlign: "center",
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
    border: "2 solid #c41e3a",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#c41e3a",
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#0f3460",
    letterSpacing: 0.5,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 15,
    padding: 12,
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
    border: "1 solid #ddd",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    objectFit: "cover",
    border: "3 solid #c41e3a",
  },
  playerName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#c41e3a",
  },
  section: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#fafbfc",
    borderRadius: 6,
    border: "1 solid #e1e4e8",
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#c41e3a",
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 4,
  },
  subsectionTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 4,
    color: "#333",
  },
  text: {
    marginBottom: 4,
    lineHeight: 1.5,
    color: "#333",
  },
  bulletPoint: {
    marginLeft: 15,
    marginBottom: 3,
    lineHeight: 1.5,
  },
  signatureSection: {
    marginTop: 20,
    borderTop: "2 solid #c41e3a",
    paddingTop: 15,
    backgroundColor: "#f8f9fa",
    padding: 15,
    borderRadius: 8,
  },
  signatureRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    gap: 20,
  },
  signatureBlock: {
    width: "45%",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 6,
    border: "1 solid #ddd",
  },
  signatureLabel: {
    fontSize: 9,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#0f3460",
  },
  signatureLine: {
    borderBottom: "2 solid #333",
    marginTop: 30,
    marginBottom: 8,
  },
  signatureDate: {
    fontSize: 9,
    color: "#666",
    marginTop: 5,
  },
});

interface ContractPDFProps {
  data: ContractData;
}

export const ContractPDF = ({ data }: ContractPDFProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>MASAKA YOUTH FOOTBALL TEAM</Text>
        <Text style={styles.subtitle}>PLAYER CONTRACT & RULES AGREEMENT</Text>
      </View>

      <View style={styles.profileSection}>
        {data.profilePicture && (
          <Image src={data.profilePicture} style={styles.profileImage} />
        )}
        <View>
          <Text style={styles.signatureLabel}>Player Name:</Text>
          <Text style={styles.playerName}>{data.playerName}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SECTION A: PLAYER RULES & EXPECTATIONS</Text>
        
        <Text style={styles.subsectionTitle}>1. Attendance & Commitment</Text>
        <Text style={styles.bulletPoint}>• Attend all training sessions, matches, and team meetings.</Text>
        <Text style={styles.bulletPoint}>• Arrive on time (10–15 minutes early).</Text>
        <Text style={styles.bulletPoint}>• If absent, inform the coach at least 2–3 hours before training/match.</Text>
        <Text style={styles.bulletPoint}>• Missing training without explanation may lead to reduced game time.</Text>

        <Text style={styles.subsectionTitle}>2. Discipline</Text>
        <Text style={styles.bulletPoint}>• No fighting, insults, bullying, or disrespect toward teammates, coaches, or officials.</Text>
        <Text style={styles.bulletPoint}>• No alcohol, drugs, or smoking while representing the team.</Text>
        <Text style={styles.bulletPoint}>• Respect referees' decisions—no arguing or misconduct.</Text>

        <Text style={styles.subsectionTitle}>3. Respect & Team Spirit</Text>
        <Text style={styles.bulletPoint}>• Treat all teammates as family.</Text>
        <Text style={styles.bulletPoint}>• Encourage, support, and help each other.</Text>
        <Text style={styles.bulletPoint}>• No negative attitudes, gossip, or dividing the team.</Text>

        <Text style={styles.subsectionTitle}>4. Uniform & Equipment</Text>
        <Text style={styles.bulletPoint}>• Players must keep full team kit clean and presentable.</Text>
        <Text style={styles.bulletPoint}>• No playing without shin guards.</Text>
        <Text style={styles.bulletPoint}>• Lost or damaged equipment due to negligence must be replaced by the player.</Text>

        <Text style={styles.subsectionTitle}>5. Performance & Effort</Text>
        <Text style={styles.bulletPoint}>• Always give 100% effort in training and matches.</Text>
        <Text style={styles.bulletPoint}>• Follow coach's instructions and tactics.</Text>
        <Text style={styles.bulletPoint}>• Maintain personal fitness, diet, and discipline.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SECTION B: PARENT/GUARDIAN RESPONSIBILITIES</Text>
        <Text style={styles.bulletPoint}>• Ensure the player attends training consistently and on time.</Text>
        <Text style={styles.bulletPoint}>• Support the team positively and respectfully.</Text>
        <Text style={styles.bulletPoint}>• No interference with coaching decisions, player selection, or tactics.</Text>
        <Text style={styles.bulletPoint}>• Inform coaches of any medical issues or injuries.</Text>
        <Text style={styles.bulletPoint}>• Settle any required team fees on time.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SECTION C: CONSEQUENCES FOR BREAKING RULES</Text>
        <Text style={styles.text}>Depending on the seriousness of the behavior, the coach may apply:</Text>
        <Text style={styles.bulletPoint}>• Warning (verbal or written)</Text>
        <Text style={styles.bulletPoint}>• Extra training or disciplinary tasks</Text>
        <Text style={styles.bulletPoint}>• Suspension from training or matches</Text>
        <Text style={styles.bulletPoint}>• Temporary or permanent removal from the team</Text>
        <Text style={styles.text}>Coaches reserve the right to enforce discipline for the good of the team.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SECTION D: PLAYER CODE OF CONDUCT</Text>
        <Text style={styles.text}>By signing this contract, I agree to:</Text>
        <Text style={styles.bulletPoint}>• Show discipline and good character on and off the field.</Text>
        <Text style={styles.bulletPoint}>• Represent the team with pride and respect.</Text>
        <Text style={styles.bulletPoint}>• Never engage in violence, theft, abuse, or illegal behavior.</Text>
        <Text style={styles.bulletPoint}>• Accept coaching decisions, even when I disagree.</Text>
        <Text style={styles.bulletPoint}>• Avoid social media posts that damage the team's reputation.</Text>
      </View>

      <View style={styles.signatureSection}>
        <Text style={styles.sectionTitle}>SECTION E: AGREEMENT & SIGNATURES</Text>
        
        <View style={styles.signatureRow}>
          <View style={styles.signatureBlock}>
            <Text style={styles.subsectionTitle}>Player Declaration</Text>
            <Text style={styles.text}>
              I, the player, have read and understood this agreement and promise to follow all rules.
            </Text>
            <View style={styles.signatureLine} />
            <Text style={styles.signatureLabel}>Player Signature</Text>
            <Text style={styles.signatureDate}>Date: {data.playerDate}</Text>
          </View>

          <View style={styles.signatureBlock}>
            <Text style={styles.subsectionTitle}>Parent/Guardian Declaration</Text>
            <Text style={styles.text}>
              I understand and accept all responsibilities and give permission for my child to participate.
            </Text>
            <View style={styles.signatureLine} />
            <Text style={styles.signatureLabel}>Parent/Guardian Signature</Text>
            <Text style={styles.signatureDate}>Date: {data.parentDate}</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export const generatePDF = async (data: ContractData) => {
  const blob = await pdf(<ContractPDF data={data} />).toBlob();
  return blob;
};
