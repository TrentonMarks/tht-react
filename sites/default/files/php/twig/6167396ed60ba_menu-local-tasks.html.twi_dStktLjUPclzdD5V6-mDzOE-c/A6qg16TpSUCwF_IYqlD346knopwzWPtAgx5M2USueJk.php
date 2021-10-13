<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/TH_base2/templates/menu-local-tasks.html.twig */
class __TwigTemplate_ff6288648596c8af6024f061ecf3faf4d4d713d8212bf7b9a5ce59e2b67d9e17 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 18
        echo "
";
        // line 19
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->attachLibrary("TH_base2/tabs"), "html", null, true);
        echo "

";
        // line 21
        if (($context["primary"] ?? null)) {
            // line 22
            echo "  <h2 class=\"visually-hidden\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Primary tabs"));
            echo "</h2>
  <ul class=\"tabs primary\">";
            // line 23
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["primary"] ?? null), 23, $this->source), "html", null, true);
            echo "</ul>
";
        }
        // line 25
        if (($context["secondary"] ?? null)) {
            // line 26
            echo "  <h2 class=\"visually-hidden\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Secondary tabs"));
            echo "</h2>
  <ul class=\"tabs secondary\">";
            // line 27
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["secondary"] ?? null), 27, $this->source), "html", null, true);
            echo "</ul>
";
        }
        // line 29
        echo "
";
    }

    public function getTemplateName()
    {
        return "themes/TH_base2/templates/menu-local-tasks.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  71 => 29,  66 => 27,  61 => 26,  59 => 25,  54 => 23,  49 => 22,  47 => 21,  42 => 19,  39 => 18,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/TH_base2/templates/menu-local-tasks.html.twig", "/Users/trentonmarks/Sites/devdesktop/tht-react/themes/TH_base2/templates/menu-local-tasks.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 21);
        static $filters = array("escape" => 19, "t" => 22);
        static $functions = array("attach_library" => 19);

        try {
            $this->sandbox->checkSecurity(
                ['if'],
                ['escape', 't'],
                ['attach_library']
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
