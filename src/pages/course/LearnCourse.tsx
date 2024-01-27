import {FC} from "react";
import {useParams} from "react-router-dom";
import {Layout} from "@/layout";
import {Reader} from "@/components/markdown";
import {Course} from "@/services/api/gen";
import {Card, CardDescription, CardTitle} from "@/components/ui/card.tsx";

export const LearnCourse: FC = () => {
  const cid = useParams().cid!;
  // TODO: API
  return (
    <Layout>
      <LearnCourseLayout
        course={{
          banner:
            "https://media.istockphoto.com/id/1219382595/fr/vectoriel/%C3%A9quations-math%C3%A9matiques-%C3%A9crites-sur-un-tableau-noir.jpg?s=612x612&w=0&k=20&c=5QA9_ehQD_RODTdtfmrFWUPnJWnJohIJ-iydeC2iZzc=",
          content: [
            "## What is it?",
            "On appelle annuités, des versements réguliers et constants effectués à des intervalles de temps constants. On distingue :\n" +
              "\n" +
              "n **Les annuités** de capitalisation  ou annuités de placement, dont l’objectif est de constituer un capital\n" +
              "\n" +
              "n **Les annuités** de remboursement ou d’amortissement, dont l’objectif est de *rembourser* une dette\n" +
              "\n" +
              "**Les versements** peuvent être effectués à la fin de période : c’est le cas des annuités de remboursement où le 1er remboursement intervient à la fin de la première période (on parle d’annuité de fin de période).\n" +
              "\n" +
              "Comme elle peuvent être versés en début de période : c’est le cas généralement, pour les annuités de placement, dès la signature du contrat, un premier versement est effectué." +
              "\n" +
              "Les 3 principes:\n" +
              "- 1\n- 2\n- 3\n\n" +
              "## What is it for?\n" +
              "On appelle annuités, des versements réguliers et constants effectués à des intervalles de temps constants. On distingue :\n" +
              "\n" +
              "n **Les annuités** de capitalisation  ou annuités de placement, dont l’objectif est de constituer un capital\n" +
              "\n" +
              "n **Les annuités** de remboursement ou d’amortissement, dont l’objectif est de *rembourser* une dette\n" +
              "\n" +
              "**Les versements** peuvent être effectués à la fin de période : c’est le cas des annuités de remboursement où le 1er remboursement intervient à la fin de la première période (on parle d’annuité de fin de période).\n" +
              "\n" +
              "Comme elle peuvent être versés en début de période : c’est le cas généralement, pour les annuités de placement, dès la signature du contrat, un premier versement est effectué." +
              "\n" +
              "Les 3 principes:\n" +
              "Les 3 principes:\n" +
              "- 1\n- 2\n- 3\n\n" +
              "## What is it for?\n" +
              '<h1 style="color: red;">A coloured section</h1>' +
              "On appelle annuités, des versements réguliers et constants effectués à des intervalles de temps constants. On distingue :\n" +
              "\n" +
              "n **Les annuités** de capitalisation  ou annuités de placement, dont l’objectif est de constituer un capital\n" +
              "\n" +
              "n **Les annuités** de remboursement ou d’amortissement, dont l’objectif est de *rembourser* une dette\n" +
              "\n" +
              "**Les versements** peuvent être effectués à la fin de période : c’est le cas des annuités de remboursement où le 1er remboursement intervient à la fin de la première période (on parle d’annuité de fin de période).\n" +
              "\n" +
              "Comme elle peuvent être versés en début de période : c’est le cas généralement, pour les annuités de placement, dès la signature du contrat, un premier versement est effectué." +
              "\n" +
              "Les 3 principes:\n",
          ].join("\n"),
          description: "Amortization",
          module: "Math-fi",
          id: cid,
          requirements: "",
        }}
      />
    </Layout>
  );
};

interface LearnCourseLayoutProps {
  course: Course;
}

const LearnCourseLayout: FC<LearnCourseLayoutProps> = ({course}) => {
  return (
    <div className="mx-auto my-0 w-[70rem]">
      <Card className="sticky top-0 border-b-4 border-b-red-400 bg-gray-100 p-5">
        <CardTitle>{course.module}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </Card>
      <Reader>{course.content!}</Reader>
    </div>
  );
};
