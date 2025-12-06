# `dataGithubRepositoryEnvironmentDeploymentPolicies` Submodule <a name="`dataGithubRepositoryEnvironmentDeploymentPolicies` Submodule" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubRepositoryEnvironmentDeploymentPolicies <a name="DataGithubRepositoryEnvironmentDeploymentPolicies" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/data-sources/repository_environment_deployment_policies github_repository_environment_deployment_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubRepositoryEnvironmentDeploymentPolicies(Construct Scope, string Id, DataGithubRepositoryEnvironmentDeploymentPoliciesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig">DataGithubRepositoryEnvironmentDeploymentPoliciesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig">DataGithubRepositoryEnvironmentDeploymentPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubRepositoryEnvironmentDeploymentPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubRepositoryEnvironmentDeploymentPolicies.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubRepositoryEnvironmentDeploymentPolicies.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubRepositoryEnvironmentDeploymentPolicies.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubRepositoryEnvironmentDeploymentPolicies.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGithubRepositoryEnvironmentDeploymentPolicies resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGithubRepositoryEnvironmentDeploymentPolicies to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGithubRepositoryEnvironmentDeploymentPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/data-sources/repository_environment_deployment_policies#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubRepositoryEnvironmentDeploymentPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.policies">Policies</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList">DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.repository">Repository</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.policies"></a>

```csharp
public DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList Policies { get; }
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList">DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList</a>

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPolicies.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubRepositoryEnvironmentDeploymentPoliciesConfig <a name="DataGithubRepositoryEnvironmentDeploymentPoliciesConfig" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubRepositoryEnvironmentDeploymentPoliciesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Environment,
    string Repository,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.environment">Environment</a></code> | <code>string</code> | The name of the environment. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.repository">Repository</a></code> | <code>string</code> | The name of the GitHub repository. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/data-sources/repository_environment_deployment_policies#id DataGithubRepositoryEnvironmentDeploymentPolicies#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/data-sources/repository_environment_deployment_policies#environment DataGithubRepositoryEnvironmentDeploymentPolicies#environment}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

The name of the GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/data-sources/repository_environment_deployment_policies#repository DataGithubRepositoryEnvironmentDeploymentPolicies#repository}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/data-sources/repository_environment_deployment_policies#id DataGithubRepositoryEnvironmentDeploymentPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies <a name="DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList <a name="DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.get"></a>

```csharp
private DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference <a name="DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies">DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPoliciesOutputReference.property.internalValue"></a>

```csharp
public DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryEnvironmentDeploymentPolicies.DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies">DataGithubRepositoryEnvironmentDeploymentPoliciesPolicies</a>

---



