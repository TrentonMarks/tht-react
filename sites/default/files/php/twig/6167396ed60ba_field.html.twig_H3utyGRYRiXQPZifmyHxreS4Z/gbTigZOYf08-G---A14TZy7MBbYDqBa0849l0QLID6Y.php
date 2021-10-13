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

/* themes/TH_base2/templates/field.html.twig */
class __TwigTemplate_1ce07d423c69842d3975d49766e9b9f008edf537fcdf97a917d751cf5f965eba extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "@stable/field/field.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 4
        $context["classes"] = [];
        // line 9
        $context["classes"] = twig_array_merge($this->sandbox->ensureToStringAllowed(($context["classes"] ?? null), 9, $this->source), [0 => (($this->sandbox->ensureToStringAllowed(        // line 10
($context["bundle"] ?? null), 10, $this->source) . "__") . \Drupal\Component\Utility\Html::getClass(twig_replace_filter($this->sandbox->ensureToStringAllowed(($context["field_name"] ?? null), 10, $this->source), ["field_" => ""])))]);
        // line 14
        $context["attributes"] = twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 14);
        // line 20
        $context["title_attributes"] = twig_get_attribute($this->env, $this->source, ($context["title_attributes"] ?? null), "addClass", [0 => (((($context["label_display"] ?? null) == "visually_hidden")) ? ("visually-hidden") : (""))], "method", false, false, true, 20);
        // line 1
        $this->parent = $this->loadTemplate("@stable/field/field.html.twig", "themes/TH_base2/templates/field.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    public function getTemplateName()
    {
        return "themes/TH_base2/templates/field.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  52 => 1,  50 => 20,  48 => 14,  46 => 10,  45 => 9,  43 => 4,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/TH_base2/templates/field.html.twig", "/Users/trentonmarks/Sites/devdesktop/tht-react/themes/TH_base2/templates/field.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 4);
        static $filters = array("merge" => 9, "clean_class" => 10, "replace" => 10);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set'],
                ['merge', 'clean_class', 'replace'],
                []
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
