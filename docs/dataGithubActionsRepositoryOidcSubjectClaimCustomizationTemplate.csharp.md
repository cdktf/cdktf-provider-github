# `dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate` Submodule <a name="`dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate` Submodule" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate <a name="DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/data-sources/actions_repository_oidc_subject_claim_customization_template github_actions_repository_oidc_subject_claim_customization_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate(Construct Scope, string Id, DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig">DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig">DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/data-sources/actions_repository_oidc_subject_claim_customization_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.includeClaimKeys">IncludeClaimKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.useDefault">UseDefault</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `IncludeClaimKeys`<sup>Required</sup> <a name="IncludeClaimKeys" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.includeClaimKeys"></a>

```csharp
public string[] IncludeClaimKeys { get; }
```

- *Type:* string[]

---

##### `UseDefault`<sup>Required</sup> <a name="UseDefault" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.useDefault"></a>

```csharp
public IResolvable UseDefault { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig <a name="DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/data-sources/actions_repository_oidc_subject_claim_customization_template#name DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate#name}. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/data-sources/actions_repository_oidc_subject_claim_customization_template#id DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/data-sources/actions_repository_oidc_subject_claim_customization_template#name DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.dataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate.DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.0/docs/data-sources/actions_repository_oidc_subject_claim_customization_template#id DataGithubActionsRepositoryOidcSubjectClaimCustomizationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



