# `data_github_actions_organization_oidc_subject_claim_customization_template`

Refer to the Terraform Registory for docs: [`data_github_actions_organization_oidc_subject_claim_customization_template`](https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/actions_organization_oidc_subject_claim_customization_template).

# `dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate` Submodule <a name="`dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate` Submodule" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate <a name="DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/actions_organization_oidc_subject_claim_customization_template github_actions_organization_oidc_subject_claim_customization_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate(Construct Scope, string Id, DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig">DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig">DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.includeClaimKeys">IncludeClaimKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `IncludeClaimKeys`<sup>Required</sup> <a name="IncludeClaimKeys" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.includeClaimKeys"></a>

```csharp
public string[] IncludeClaimKeys { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig <a name="DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/actions_organization_oidc_subject_claim_customization_template#id DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.dataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate.DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/data-sources/actions_organization_oidc_subject_claim_customization_template#id DataGithubActionsOrganizationOidcSubjectClaimCustomizationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



