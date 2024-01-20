# `dataGithubRepositoryEnvironments` Submodule <a name="`dataGithubRepositoryEnvironments` Submodule" id="@cdktf/provider-github.dataGithubRepositoryEnvironments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubRepositoryEnvironments <a name="DataGithubRepositoryEnvironments" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/data-sources/repository_environments github_repository_environments}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubRepositoryEnvironments(Construct Scope, string Id, DataGithubRepositoryEnvironmentsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsConfig">DataGithubRepositoryEnvironmentsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsConfig">DataGithubRepositoryEnvironmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubRepositoryEnvironments resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubRepositoryEnvironments.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubRepositoryEnvironments.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubRepositoryEnvironments.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubRepositoryEnvironments.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGithubRepositoryEnvironments resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGithubRepositoryEnvironments to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGithubRepositoryEnvironments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/data-sources/repository_environments#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubRepositoryEnvironments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.environments">Environments</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsList">DataGithubRepositoryEnvironmentsEnvironmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.repository">Repository</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Environments`<sup>Required</sup> <a name="Environments" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.environments"></a>

```csharp
public DataGithubRepositoryEnvironmentsEnvironmentsList Environments { get; }
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsList">DataGithubRepositoryEnvironmentsEnvironmentsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironments.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubRepositoryEnvironmentsConfig <a name="DataGithubRepositoryEnvironmentsConfig" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubRepositoryEnvironmentsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Repository,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsConfig.property.repository">Repository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/data-sources/repository_environments#repository DataGithubRepositoryEnvironments#repository}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/data-sources/repository_environments#id DataGithubRepositoryEnvironments#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsConfig.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/data-sources/repository_environments#repository DataGithubRepositoryEnvironments#repository}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/data-sources/repository_environments#id DataGithubRepositoryEnvironments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubRepositoryEnvironmentsEnvironments <a name="DataGithubRepositoryEnvironmentsEnvironments" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubRepositoryEnvironmentsEnvironments {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubRepositoryEnvironmentsEnvironmentsList <a name="DataGithubRepositoryEnvironmentsEnvironmentsList" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubRepositoryEnvironmentsEnvironmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsList.get"></a>

```csharp
private DataGithubRepositoryEnvironmentsEnvironmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGithubRepositoryEnvironmentsEnvironmentsOutputReference <a name="DataGithubRepositoryEnvironmentsEnvironmentsOutputReference" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubRepositoryEnvironmentsEnvironmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.property.nodeId">NodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironments">DataGithubRepositoryEnvironmentsEnvironments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.property.nodeId"></a>

```csharp
public string NodeId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironmentsOutputReference.property.internalValue"></a>

```csharp
public DataGithubRepositoryEnvironmentsEnvironments InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryEnvironments.DataGithubRepositoryEnvironmentsEnvironments">DataGithubRepositoryEnvironmentsEnvironments</a>

---



