# `github_actions_organization_oidc_subject_claim_customization_template`

Refer to the Terraform Registory for docs: [`github_actions_organization_oidc_subject_claim_customization_template`](https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/actions_organization_oidc_subject_claim_customization_template).

# `actionsOrganizationOidcSubjectClaimCustomizationTemplate` Submodule <a name="`actionsOrganizationOidcSubjectClaimCustomizationTemplate` Submodule" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsOrganizationOidcSubjectClaimCustomizationTemplate <a name="ActionsOrganizationOidcSubjectClaimCustomizationTemplate" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/actions_organization_oidc_subject_claim_customization_template github_actions_organization_oidc_subject_claim_customization_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new ActionsOrganizationOidcSubjectClaimCustomizationTemplate(Construct Scope, string Id, ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig">ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig">ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

ActionsOrganizationOidcSubjectClaimCustomizationTemplate.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

ActionsOrganizationOidcSubjectClaimCustomizationTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

ActionsOrganizationOidcSubjectClaimCustomizationTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.includeClaimKeysInput">IncludeClaimKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.includeClaimKeys">IncludeClaimKeys</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeClaimKeysInput`<sup>Optional</sup> <a name="IncludeClaimKeysInput" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.includeClaimKeysInput"></a>

```csharp
public string[] IncludeClaimKeysInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludeClaimKeys`<sup>Required</sup> <a name="IncludeClaimKeys" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.includeClaimKeys"></a>

```csharp
public string[] IncludeClaimKeys { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig <a name="ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] IncludeClaimKeys,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.includeClaimKeys">IncludeClaimKeys</a></code> | <code>string[]</code> | A list of OpenID Connect claims. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/actions_organization_oidc_subject_claim_customization_template#id ActionsOrganizationOidcSubjectClaimCustomizationTemplate#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IncludeClaimKeys`<sup>Required</sup> <a name="IncludeClaimKeys" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.includeClaimKeys"></a>

```csharp
public string[] IncludeClaimKeys { get; set; }
```

- *Type:* string[]

A list of OpenID Connect claims.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/actions_organization_oidc_subject_claim_customization_template#include_claim_keys ActionsOrganizationOidcSubjectClaimCustomizationTemplate#include_claim_keys}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.actionsOrganizationOidcSubjectClaimCustomizationTemplate.ActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/actions_organization_oidc_subject_claim_customization_template#id ActionsOrganizationOidcSubjectClaimCustomizationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



